<script>
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
			<li><a href="/signIn">로그인</a></li>
			<li><a href="/alram">알림확인</a></li>
			<li><a href="/chat">채팅</a></li>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>created by I'm_younique</footer>

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
		display: flex;
		justify-content: center;
		font-weight: 700;
	}
</style>
