<script lang="ts">
	export let searchResult;

	const { id, title, price, seenCount, likeCount, imagePath } = searchResult;
</script>

<a href={`post/${id}`} class="post-wrapper">
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
</a>

<style lang="scss">
	.post-wrapper {
		display: flex;
		flex-direction: column;
		cursor: pointer;

		text-decoration: none; /* 링크에 밑줄 제거 */
		color: inherit; /* 링크의 텍스트 색상을 부모 요소의 색상으로 상속 */
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
