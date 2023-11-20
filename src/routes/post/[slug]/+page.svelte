<script lang="ts">
	import { SendIcon } from 'svelte-feather-icons';
	import Avatar from '../../lib/components/Avatar.svelte';
	import Comments from '../../lib/components/Comments.svelte';
	import axios from 'axios';
	export let data;

	const {
		postId,
		userId,
		title,
		description,
		imagePath,
		price,
		likeCount,
		seenCount,
		comments,
		itemStatus,
		isSeller,
		sellerNickname,
		sellerImg
	} = data;

	let commentValue = '';

	let commentsList = comments;

	async function AddComments() {
		const headers = {
			account: userId
		};
		const sendData = {
			postId,
			content: commentValue
		};
		await axios.post(`http://43.201.161.245:8080/api/comments`, sendData, {
			headers
		});
		const commentData = {
			author: {
				profileImgPath: data.user.img,
				nickname: data.user.nickname
			},
			content: commentValue,
			modifyAt: new Date()
		};
		commentsList = [...comments, commentData];
		commentValue = '';
	}

	// TODO: 판매 (판매 모달 및 선택) 구매 (구매하시겠습니까 모달)
	// TODO: 댓글 보이게 하기 (댓글 컴포넌트 생성)
	// TODO: 관심 표시 및 해제
</script>

<div class="post-detail-wrapper">
	<section class="post-container">
		<div class="img-container">
			<img src={`http://168.188.123.234:8080${imagePath}`} alt="게시글 이미지" />
		</div>
		<div class="user-info">
			<div class="seller-div">
				<Avatar imgString={`http://168.188.123.234:8080${sellerImg}`} size={24} />
				{sellerNickname}
			</div>
			<div>
				{#if isSeller}
					<button class="mini-btn">판매하기</button>
				{:else}
					<span>좋아요하기</span>
					<button class="mini-btn">구매하기</button>
				{/if}
			</div>
		</div>
		<div class="post-detail">
			<div>
				<span class="post-title">{title}</span>
				<div>
					<span>조회: {seenCount}</span>
					<span>관심: {likeCount}</span>
				</div>
			</div>
			<div class="post-price">{price.toLocaleString()}</div>
			<div>{description}</div>
		</div>
	</section>
	<section class="comment-container">
		<div class="commnet-wrapper">
			{#each commentsList as comment}
				<Comments {comment} />
			{/each}
		</div>
		<div class="input-wrapper">
			<input type="text" bind:value={commentValue} placeholder="댓글을 입력해주세요" />
			<button class="send-icon" on:click={AddComments}>
				<SendIcon size="24" />
			</button>
		</div>
	</section>
</div>

<style lang="scss">
	.post-detail-wrapper {
		display: flex;
		width: 80%;
		margin-top: 2rem;
		margin-left: auto;
		margin-right: auto;
		gap: 2rem;
	}

	.post-container {
		display: flex;
		width: 50%;
		flex-direction: column;
		gap: 1rem;
	}

	.img-container {
		width: 20rem;
		height: 18rem;
		text-align: center;
	}

	.user-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.seller-div {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.post-detail {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& > :nth-child(1) {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.comment-container {
		position: relative;
		width: 50%;
		display: flex;
		flex-direction: column;

		& > :nth-child(1) {
			display: flex;
			flex-direction: column;
			height: 90%;
			overflow-y: scroll;
		}

		& > :nth-child(2) {
			position: absolute;
			bottom: 0;
			width: 100%;

			input {
				width: 100%;
				border: 1px solid #e0e0e0;
				padding: 8px;
				border-radius: 50px; /* 굴곡 주면 padding 값도 그에 상응하게 적용하는 것이 좋음 */
				display: block;
				margin: auto;
				font-size: 1rem;
				background-size: 20px;
				padding-left: 12px; /* 글자 써지는 위치 */
			}

			.send-icon {
				background: inherit;
				border: none;
				box-shadow: none;
				border-radius: 0;
				padding: 0;
				overflow: visible;
				cursor: pointer;
				position: absolute;
				top: 6px;
				right: 0;
			}
		}
	}
</style>
