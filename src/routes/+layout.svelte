<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import '../styles/global.scss';

	let src = '/logo.png';
</script>

<header>
	<a href="/" class="head-logo">
		<img {src} alt="logo" class="head-image" />
		<span class="head-name">MaYackMarket</span>
	</a>
	<nav class="head-nav">
		<ul class="head-nav-list">
			{#if $page.data.user}
				<li><a href={`${base}/my`}>마이페이지</a></li>
				<li><a href={`${base}/alram`}>알림확인</a></li>
				<li><a href={`${base}/chat`}>채팅</a></li>
			{:else}
				<li><a href={`${base}/signIn`}>로그인</a></li>
			{/if}
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>created by I'm_younique</footer>

<style>
	header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.head-logo {
		display: flex;
		align-items: center;
		gap: 1rem;

		&:hover {
			text-decoration: none;
		}
	}

	.head-name {
		font-size: 1.8rem;
		font-weight: 800;
	}

	.head-image {
		width: 50px;
		height: 50px;
	}

	.head-nav-list {
		list-style: none;
		display: flex;
		gap: 2rem;
	}

	footer {
		position: relative;
		display: flex;
		justify-content: center;
		font-weight: 700;
	}
</style>
