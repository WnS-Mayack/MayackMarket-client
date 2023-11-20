<script lang="ts">
	import Avatar from './Avatar.svelte';
	import { formatDateString } from '../utils/formatDateString';
	interface IComment {
		author: {
			profileImgPath: string;
			nickname: string;
		};
		content: string;
		modifyAt: Date;
	}

	export let comment: IComment;
</script>

<div class="comment-wrapper">
	<div>
		<div>
			<Avatar imgString={`http://168.188.123.234:8080${comment.author.profileImgPath}`} size={24} />
			<span>{comment.author.nickname}</span>
		</div>
		<span>{formatDateString(new Date(comment.modifyAt))}</span>
	</div>
	<div>
		<span>{comment.content}</span>
	</div>
</div>

<style lang="scss">
	.comment-wrapper {
		& > :nth-child(1) {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& > :nth-child(1) {
				display: flex;
				gap: 0.5rem;
				align-items: center;
			}
		}

		& > :nth-child(2) {
			margin-top: 1rem;
		}

		padding: 1rem 0.5rem;
	}
</style>
