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
			<li><a href="/login">로그인</a></li>
			<li><a href="/alram">알림확인</a></li>
			<li><a href="/chat">채팅</a></li>
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
