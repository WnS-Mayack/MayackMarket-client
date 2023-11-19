<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	const user = $page.data.user;

	// TODO: 유저 정보 나열하기
	// TODO: 관심 키워드 추가 및 삭제
	// TODO: 판매 구매 목록 보이게 하기
	// TODO: 관심 목록 보이게 하기
</script>

<div>
	<div>
		<span>{user.nickname} {user.userId} {user.img} </span>
	</div>
	<form method="POST" use:enhance>
		<button class="custom-btn">로그아웃</button>
	</form>
</div>
