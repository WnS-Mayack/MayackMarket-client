<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	const user = $page.data.user;
</script>

<div>
	<div>
		<span>{user.nickname} {user.userId} {user.img} </span>
	</div>
	<form method="POST" use:enhance>
		<button class="custom-btn">로그아웃</button>
	</form>
</div>
