<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { enhance } from '$app/forms';
	import { locations } from '../lib/constants';
	import type { ActionData } from './$types';

	import Avatar from '../lib/components/Avatar.svelte';
	import Modal from '../lib/components/Modal.svelte';

	export let data: {
		userId: string;
		password: string;
		location: string;
		nickname: string;
		profileImg: File;
	};
	export let form: ActionData;

	let imgString = '';

	const handleFileChange = (event: any) => {
		const fileInput = event.target;
		if (fileInput.files.length > 0) {
			const selectedFile = fileInput.files[0];
			const reader = new FileReader();

			reader.onload = () => {
				imgString = reader.result as string;
			};

			reader.readAsDataURL(selectedFile);
		}
	};

	function handleClickSelectImg() {
		(document.querySelector('.img-input') as HTMLInputElement).value = '';
		(document.querySelector('.img-input') as HTMLInputElement).click();
	}
</script>

<div class="signUp-wrapper">
	<h1>회원가입</h1>
	<form class="signUp-form" method="POST" action="?/submit" use:enhance>
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
			{#if form?.missingId}<span class="error">{form.message}</span>{/if}
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
		<div class="input-wrapper">
			<select
				class="form-input"
				value={data.location || '선택'}
				name="location"
				autocomplete="off"
				required
			>
				{#each locations as location}
					<option value={location}>{location}</option>
				{/each}
			</select>
			<label for="password" class="form-label">활동지역</label>
			{#if form?.missingLoc}<span class="error">{form.message}</span>{/if}
		</div>
		<div class="input-wrapper">
			<input
				class="form-input"
				value={data.nickname || ''}
				type="text"
				name="nickname"
				autocomplete="off"
				required
			/>
			<label for="password" class="form-label">닉네임</label>
			{#if form?.missingLoc}<span class="error">{form.message}</span>{/if}
		</div>
		<div class="select-img-wrapper">
			<label for="profileImg">프로필이미지</label>
			<input
				class="img-input"
				value={data.profileImg || ''}
				name="profileImg"
				type="file"
				accept="image/*"
				on:change={handleFileChange}
			/>
			<Avatar {imgString} size={60} />
			<button type="button" class="mini-btn flex-none" on:click={handleClickSelectImg}>
				이미지 넣기
			</button>
			{#if form?.missingImg}<span class="error">{form.message}</span>{/if}
		</div>
		<button class="custom-btn">회원가입</button>
	</form>
</div>

{#if form?.success}
	<Modal
		title="회원가입 성공"
		content="로그인하러 가보시죠!"
		type="success"
		callback={() => goto(`${base}/signIn`)}
	/>
{/if}
{#if form?.error}
	<Modal
		title="회원가입 실패"
		content="서버오류로 회원가입에 실패했습니다. 다시 시도해주세요"
		type="error"
		callback={() => {
			form = null;
		}}
	/>
{/if}

<style>
	.signUp-wrapper {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.signUp-form {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.select-img-wrapper {
		position: relative;
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.flex-none {
		flex: none;
	}

	.img-input {
		display: none;
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
