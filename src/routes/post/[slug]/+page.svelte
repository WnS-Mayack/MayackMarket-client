<script lang="ts">
	import Avatar from '../../lib/components/Avatar.svelte';
</script>

<div class="post-detail-wrapper">
	<section class="post-container">
		<div class="img-container">
			<img src="" alt="게시글 이미지" />
		</div>
		<div class="user-info">
			<span>유저닉네임</span>
			<div>판매하기 or 구매하기</div>
		</div>
		<div class="post-detail">
			<div>
				<span>게시글 제목</span>
				<div>
					<span>조회</span>
					<span>관심</span>
				</div>
			</div>
			<div>가격</div>
			<div>게시글 내용</div>
		</div>
	</section>
	<section class="comment-container">
		<div />
		<div>
			<input type="text" placeholder="댓글을 입력해주세요" />
		</div>
	</section>
</div>

<style lang="scss">
	.post-detail-wrapper {
		display: flex;
	}

	.post-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.img-container {
		width: 18rem;
		height: 18rem;
	}

	.user-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.post-detail {
		& > :nth-child(1) {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.comment-container {
		position: relative;
		width: inherit;
		display: flex;
		flex-direction: column;

		& > :nth-child(1) {
			display: flex;
			flex-direction: column;
		}

		& > :nth-child(2) {
			position: absolute;
			bottom: 0;

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
		}
	}
</style>
