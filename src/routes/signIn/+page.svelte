<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let data: { userId: string; password: string };
	export let form: ActionData;
</script>

<div class="login-wrapper">
	<h1>Login</h1>
	<form class="login-form" method="POST" action="?/submit" use:enhance>
		<div class="input-wrapper">
			<input
				class="form-input"
				value={data.userId || ''}
				type="text"
				name="userId"
				autocomplete="off"
				required
			/>
			<label for="userId" class="form-label">아이디</label>
			{#if form?.missing}<span class="error">{form.message}</span>{/if}
		</div>
		<div class="input-wrapper">
			<input
				class="form-input"
				value={data.password || ''}
				type="password"
				name="password"
				autocomplete="off"
				required
			/>
			<label for="password" class="form-label">비밀번호</label>
			{#if form?.invalid}<span class="error">{form.message}</span>{/if}
		</div>
		<button class="custom-btn">로그인</button>
	</form>
	<span><a href="/signUp">회원가입</a></span>
</div>

<style>
	.login-wrapper {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.error {
		position: absolute;
		width: max-content;
		right: 0;
		top: 120%;
		font-size: 0.8rem;
		font-weight: 700;
		color: red;
	}
</style>
