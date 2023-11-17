<script lang="ts">
	import { locations } from '../lib/constants';
	import { enhance } from '$app/forms';

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

<form class="write-wrapper" method="POST" use:enhance>
	<div class="single-form-wrapper">
		<label for="title">제목</label>
		<input type="text" name="title" />
	</div>
	<div class="single-form-wrapper">
		<label for="location">지역</label>
		<select name="location">
			{#each locations as location}
				<option value={location}>{location}</option>
			{/each}
		</select>
	</div>
	<div class="single-form-wrapper">
		<label for="price">가격</label>
		<input type="number" name="price" />
	</div>
	<div class="single-form-wrapper">
		<label for="images">사진</label>
		<input
			class="img-input"
			type="file"
			accept="image/*"
			name="images"
			on:change={handleFileChange}
		/>
		<button class="mini-btn" type="button" on:click={handleClickSelectImg}>이미지 추가하기</button>
		{#if imgString !== ''}
			<img class="preview-image" src={imgString} alt="이미지 미리보기" />
		{/if}
	</div>
	<div class="single-form-wrapper">
		<label for="content">내용</label>
		<textarea name="content" />
	</div>
	<button class="custom-btn">판매하기</button>
</form>

<style>
	input,
	select,
	textarea {
		width: 100%;
		flex: 1;
		border: 1px solid #e0e0e0;
		padding: 8px;
		border-radius: 8px; /* 굴곡 주면 padding 값도 그에 상응하게 적용하는 것이 좋음 */
		display: block;
		margin: auto;
		font-size: 1rem;
		background-size: 20px;
		padding-left: 12px; /* 글자 써지는 위치 */
	}

	label {
		min-width: 4rem;
	}

	textarea {
		resize: none;
		height: 25vh;
		overflow-y: scroll;
	}

	.write-wrapper {
		margin-top: 2rem;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: stretch;
	}

	.single-form-wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.img-input {
		display: none;
	}

	.preview-image {
		width: 15rem;
		height: 15rem;
	}
</style>
