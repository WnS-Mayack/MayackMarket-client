<script lang="ts">
	import { enhance } from '$app/forms';

	import Avatar from '../lib/components/Avatar.svelte';

	export let data: {
		userId: string;
		password: string;
		location: string;
		nickname: string;
		profileImg?: string;
	};
	const locations = ['서울', '인천', '대전', '광주', '부산', '대구', '울산'];
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
		</div>
		<div class="select-img-wrapper">
			<label for="profileImg">프로필이미지</label>
			<input
				class="img-input"
				value={data.profileImg}
				required
				name="profileImg"
				type="file"
				accept="image/*"
				on:change={handleFileChange}
			/>
			<Avatar {imgString} size={60} />
			<button type="button" class="mini-btn flex-none" on:click={handleClickSelectImg}>
				이미지 넣기
			</button>
		</div>
		<button class="custom-btn">회원가입</button>
	</form>
</div>

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
