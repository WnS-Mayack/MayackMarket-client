<script>
	import '../styles/global.scss';

	let src = '/logo.png';
</script>

<header>
	<div class="head-logo">
		<img {src} alt="logo" class="head-image" />
		<span class="head-name">MaYackMarket</span>
	</div>
	<nav class="head-nav">
		<ul class="head-nav-list">
			<li>로그인</li>
			<li>알림확인</li>
			<li>채팅</li>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>created by dongyounyim</footer>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.head-logo {
		display: flex;
		align-items: center;
		gap: 1rem;
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
		display: flex;
		justify-content: center;
	}
</style>
