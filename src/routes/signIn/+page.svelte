<script>
	export const form = {
		userId: '',
		password: ''
	};
	console.log(form);
</script>

<div class="login-wrapper">
	<h1>Login</h1>
	<form class="login-form" method="POST" action="login">
		<div class="input-wrapper">
			<input
				class="form-input"
				value={form.userId}
				type="text"
				name="userId"
				autocomplete="off"
				required
			/>
			<label for="userId" class="form-label">아이디</label>
		</div>
		<div class="input-wrapper">
			<input
				class="form-input"
				value={form.password}
				type="password"
				name="password"
				autocomplete="off"
				required
			/>
			<label for="password" class="form-label">비밀번호</label>
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
</style>
