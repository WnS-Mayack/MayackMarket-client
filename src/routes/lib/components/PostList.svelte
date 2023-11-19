<script lang="ts">
	let temp = 40000;
	export let searchResult;

	const { title, price, seenCount, likeCount, imagePath } = searchResult;
</script>

<section class="post-grid">
	<div class="post-wrapper">
		<div class="post-img-wrapper">
			<img src={`http://168.188.123.234:8080${imagePath}`} alt="판매 이미지" />
		</div>
		<span class="post-title">{title}</span>
		<div class="post-footer">
			<span class="post-price">{price.toLocaleString()}</span>
			<div class="post-sub">
				<span>조회수: {seenCount}</span>
				<span>좋아요: {likeCount}</span>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.post-grid {
		display: grid;
		align-self: flex-start;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;
	}

	.post-wrapper {
		display: flex;
		flex-direction: column;
	}

	.post-img-wrapper {
		width: 250px;
		height: 250px;
		background-color: gray;
		border-radius: 16px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.post-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
