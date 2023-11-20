<script lang="ts">
	import { onMount } from 'svelte';
	import { SendIcon } from 'svelte-feather-icons';
	import Avatar from '../../lib/components/Avatar.svelte';
	import Modal from '../../lib/components/Modal.svelte';
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

	let hasLike = false;
	let likes = likeCount;

	let buyModalOpen = false;
	let sellModalOpen = false;

	let buyer: any[] = [];

	let item_status = itemStatus;

	const headers = {
		account: userId
	};

	// 댓글 추가
	async function AddComments() {
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

	async function handleLike() {
		await axios.post(
			`http://43.201.161.245:8080/api/posts/like/${postId}`,
			{ id: postId },
			{ headers }
		);

		if (!hasLike) {
			hasLike = true;
			likes = likeCount + 1;
		}
	}

	async function handleBuy() {
		buyModalOpen = false;
		await axios.post(
			`http://43.201.161.245:8080/api/orders/${postId}/buy`,
			{ postId },
			{ headers }
		);
	}

	async function getBuyerList() {
		const res = await axios.get(`http://43.201.161.245:8080/api/orders/${postId}/buy`, { headers });

		buyer = res.data.users;
	}

	async function handleSell(buyerId: number) {
		sellModalOpen = false;
		await axios.post(
			`http://43.201.161.245:8080/api/orders/${postId}/sell/${buyerId}`,
			{ postId },
			{ headers }
		);

		item_status = 'SOLD_OUT';
	}

	onMount(() => {
		getBuyerList();
	});
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
				{#if item_status === 'SOLD_OUT'}
					<span>판매완료</span>
				{:else if isSeller}
					<button
						class="mini-btn"
						on:click={() => {
							sellModalOpen = true;
						}}>판매하기</button
					>
				{:else}
					<button class="mini-btn" on:click={handleLike}>관심</button>
					<button
						class="mini-btn"
						on:click={() => {
							buyModalOpen = true;
						}}>구매하기</button
					>
				{/if}
			</div>
		</div>
		<div class="post-detail">
			<div>
				<span class="post-title">{title}</span>
				<div>
					<span>조회: {seenCount}</span>
					<span>관심: {likes}</span>
				</div>
			</div>
			<div class="post-price">{price.toLocaleString()}</div>
			<div>{description}</div>
		</div>
	</section>
	<section class="comment-container">
		<div class="commnet-wrapper">
			{#if commentsList.length > 0}
				{#each commentsList as comment}
					<Comments {comment} />
				{/each}
			{/if}
		</div>
		<div class="input-wrapper">
			<input type="text" bind:value={commentValue} placeholder="댓글을 입력해주세요" />
			<button class="send-icon" on:click={AddComments}>
				<SendIcon size="24" />
			</button>
		</div>
	</section>
</div>

{#if buyModalOpen}
	<Modal
		title="구매하시겠습니까?"
		content="판매자가 구매 승인하면 구매확정됩니다."
		type="success"
		callback={handleBuy}
	/>
{/if}

{#if sellModalOpen}
	<div class="sellModal">
		<div class="sellmodalContainer">
			<h3>판매자 확정하기</h3>
			{#if buyer.length === 0}
				<h2>구매하려는 유저가 없습니다.</h2>
			{:else}
				<div class="buyer-wrapper">
					{#each buyer as buyUser}
						<div class="buyer">
							<div>
								<Avatar
									imgString={`http://168.188.123.234:8080${buyUser.profileImgPath}`}
									size={24}
								/>
								<span>{buyUser.nickname}</span>
							</div>
							<button class="mini-btn" on:click={() => handleSell(buyUser.id)}>판매확정</button>
						</div>
					{/each}
					<div class="buyer" />
				</div>
			{/if}
		</div>
	</div>
{/if}

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

	.sellModal {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: rgba(0, 0, 0, 0.7);
	}

	.sellmodalContainer {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		padding: 1rem;
		border-radius: 16px;
		min-width: 16rem;
		max-height: 70vh;
		overflow-y: scroll;
	}

	.buyer-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.buyer {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > :nth-child(1) {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}
</style>
