<script lang="ts">
	let temp = 40000;
	export let searchResults;
</script>

<section class="post-grid">
	<div class="post-wrapper">
		<div class="post-img-wrapper" />
		<span class="post-title">제품제목</span>
		<div class="post-footer">
			<span class="post-price">{temp.toLocaleString()}</span>
			<div class="post-sub">
				<span>조회수</span>
				<span>좋아요</span>
			</div>
		</div>
	</div>
</section>

<style>
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
	}

	.post-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
