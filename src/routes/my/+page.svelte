<script>
	import { goto } from '$app/navigation';
	async function handleLogout() {
		goto('/signOut');
	}
</script>

<div>
	<button class="custom-btn" on:click={handleLogout}>로그아웃</button>
</div>
