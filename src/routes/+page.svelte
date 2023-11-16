<script lang="ts">
	import { onMount } from 'svelte';
	import type { Post } from '../app.js';

	import SearchForm from './lib/components/SearchForm.svelte';
	import PostList from './lib/components/PostList.svelte';
	import PostSkeleton from './lib/components/PostSkeleton.svelte';

	export let data; // user정보와, 초기화된 search 정보 담김

	let searchData = data.searchData;
	let searchPromise: Promise<Omit<Post, 'comments' | 'writer'>[]> | Promise<unknown>;

	// const searchResults: Omit<Post, 'comments' | 'writer'>[] = [];

	function fetchSearchResult() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('[]');
			}, 2000);
		});
	}

	onMount(() => {
		searchPromise = fetchSearchResult();
		// TODO: 초기 검색
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
			<button class="custom-btn">판매글 쓰기</button>
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
