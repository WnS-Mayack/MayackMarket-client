<script lang="ts">
	import { onMount } from 'svelte';
	import type { Post } from '../app.js';
	import { goto } from '$app/navigation';

	import SearchForm from './lib/components/SearchForm.svelte';
	import PostList from './lib/components/PostList.svelte';
	import PostSkeleton from './lib/components/PostSkeleton.svelte';
	import axios from 'axios';

	export let data; // user정보와, 초기화된 search 정보 담김

	let searchData = data.searchData;
	let searchPromise: Promise<Omit<Post, 'comments' | 'writer'>[]> | Promise<unknown>;

	// const searchResults: Omit<Post, 'comments' | 'writer'>[] = [];

	async function fetchSearchResult() {
		const params = {
			title: searchData.searchText,
			region: searchData.location,
			minPrice: searchData.minPrice,
			maxPrice: searchData.maxPrice
		};
		try {
			const res = await axios.get(`http://43.201.161.245:8080/api/posts`, { params });
			return res.data;
		} catch (error) {
			throw new Error('error');
		}
	}

	function goToWrite() {
		goto('/write');
	}

	onMount(() => {
		searchPromise = fetchSearchResult();
	});
</script>

<div class="main-wrapper">
	<div class="main-header">
		<SearchForm
			{searchData}
			on:click={() => {
				searchPromise = fetchSearchResult();
			}}
		/>
		{#if data.user}
			<button class="custom-btn" on:click={goToWrite}>판매글 쓰기</button>
		{/if}
	</div>

	{#await searchPromise}
		<PostSkeleton />
	{:then searchResults}
		{#if searchResults instanceof Array && searchResults.length > 0}
			<PostList {searchResults} />
		{:else}
			<h2>검색결과 없음</h2>
		{/if}
	{:catch}
		<h2 style="color: red">검색도중 에러발생. 다시 시도해주세요</h2>
	{/await}
</div>

<style>
	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		margin: 2rem 0;
	}
	.main-header {
		width: -webkit-fill-available;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
