<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Avatar from '../lib/components/Avatar.svelte';
	import type { Post } from '../../app';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import PostList from '../lib/components/PostList.svelte';
	import PostSkeleton from '../lib/components/PostSkeleton.svelte';

	const user = $page.data.user;

	const headers = {
		account: user.userId
	};

	let keywordValue = '';
	let keywordList: string[] = [];

	let sellItemPromise: Promise<Omit<Post, 'comments' | 'writer'>[]> | Promise<unknown>;
	let likeItemPromise: Promise<Omit<Post, 'comments' | 'writer'>[]> | Promise<unknown>;
	let buyItemPromise: Promise<Omit<Post, 'comments' | 'writer'>[]> | Promise<unknown>;

	async function getSellItem() {
		const res = await axios.get(`http://43.201.161.245:8080/api/users/sellItems`, { headers });
		return res.data;
	}

	async function getLikeItem() {
		const res = await axios.get(`http://43.201.161.245:8080/api/users/likeItems`, { headers });
		return res.data;
	}

	async function getBuyItem() {
		const res = await axios.get(`http://43.201.161.245:8080/api/users/buyItems`, { headers });
		return res.data;
	}

	async function getKeywords() {
		const res = await axios.get(`http://43.201.161.245:8080/api/users/keywords`, { headers });

		keywordList = [...res.data.keywords];
	}

	async function addKeyword() {
		const sendData = {
			keywords: [keywordValue]
		};
		await axios.post(`http://43.201.161.245:8080/api/users/keywords`, sendData, { headers });

		keywordList = [...keywordList, keywordValue];

		keywordValue = '';
	}

	onMount(() => {
		sellItemPromise = getSellItem();
		likeItemPromise = getLikeItem();
		buyItemPromise = getBuyItem();
		getKeywords();
	});
</script>

<div class="my-page-wrapper">
	<div class="user-profile-wrapper">
		<div class="user-profile">
			<div>
				<span>{user.nickname}</span>
				<span>활동지역 : {user.location}</span>
			</div>
			<Avatar imgString={`http://168.188.123.234:8080${user.img}`} size={50} />
		</div>
		<div class="keywords-wrapper">
			<div>
				<input type="text" bind:value={keywordValue} placeholder="관심키워드 추가" />
				<button class="mini-btn" on:click={addKeyword}>추가</button>
			</div>
			<div>
				<span>관심키워드 목록</span>
				<div class="keywords-list">
					{#each keywordList as keyword}
						<div>{keyword}</div>
					{/each}
				</div>
			</div>
		</div>

		<form method="POST" action="?/signOut" use:enhance>
			<button class="custom-btn">로그아웃</button>
		</form>
	</div>
	<div class="my-post-wrapper">
		<div class="my-post">
			<h2>[관심내역]</h2>
			{#await likeItemPromise}
				<PostSkeleton />
			{:then likeItemResults}
				{#if likeItemResults instanceof Array && likeItemResults.length > 0}
					{#each likeItemResults as likeItemResult}
						<PostList searchResult={likeItemResult} />
					{/each}
				{:else}
					<h2>좋아요 목록 없음</h2>
				{/if}
			{:catch}
				<h2 style="color: red">통신도중 에러발생. 다시 시도해주세요</h2>
			{/await}
		</div>
		<div class="my-post">
			<h2>[판매내역]</h2>
			{#await sellItemPromise}
				<PostSkeleton />
			{:then sellItemResults}
				{#if sellItemResults instanceof Array && sellItemResults.length > 0}
					{#each sellItemResults as sellItemResult}
						<PostList searchResult={sellItemResult} />
					{/each}
				{:else}
					<h2>판매 목록 없음</h2>
				{/if}
			{:catch}
				<h2 style="color: red">통신도중 에러발생. 다시 시도해주세요</h2>
			{/await}
		</div>
		<div class="my-post">
			<h2>[구매내역]</h2>
			{#await buyItemPromise}
				<PostSkeleton />
			{:then buyItemResults}
				{#if buyItemResults instanceof Array && buyItemResults.length > 0}
					{#each buyItemResults as buyItemResult}
						<PostList searchResult={buyItemResult} />
					{/each}
				{:else}
					<h2>구매 목록 없음</h2>
				{/if}
			{:catch}
				<h2 style="color: red">통신도중 에러발생. 다시 시도해주세요</h2>
			{/await}
		</div>
	</div>
</div>

<style lang="scss">
	.my-page-wrapper {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
	}

	.user-profile-wrapper {
		display: flex;
		flex-direction: column;
		min-width: 15rem;
		max-width: 20rem;
		gap: 1rem;
		align-items: center;
	}

	.user-profile {
		display: flex;
		align-items: center;
		gap: 1rem;

		& > :nth-child(1) {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			align-items: center;

			& > :nth-child(1) {
				font-size: 1.5rem;
				font-weight: 700;
			}
		}
	}

	.keywords-wrapper {
		& > :nth-child(1) {
			display: flex;
			gap: 1rem;
		}

		& > :nth-child(2) {
			margin-top: 1rem;
		}
	}

	input {
		width: 60%;
		border: 1px solid #e0e0e0;
		padding: 8px;
		border-radius: 50px; /* 굴곡 주면 padding 값도 그에 상응하게 적용하는 것이 좋음 */
		display: block;
		margin: auto;
		font-size: 1rem;
		background-size: 20px;
		padding-left: 12px; /* 글자 써지는 위치 */
	}

	.my-post-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.post-grid {
		display: grid;
		align-self: flex-start;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;
	}

	.keywords-list {
		margin-top: 0.5rem;
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;

		div {
			background-color: orange;
			color: black;
			font-weight: 600;
			border-radius: 16px;
			padding: 8px;

			&::before {
				content: '#';
			}
		}
	}
</style>
