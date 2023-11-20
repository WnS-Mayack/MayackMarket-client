<script lang="ts">
	export let title: string;
	export let content: string;
	export let type: 'success' | 'error';
	export let callback: () => void;
</script>

<div class="modalWrapper">
	<div class="modalContainer">
		<h3 style="color: {type === 'success' ? 'green' : 'red'}">{title}</h3>
		<p>{content}</p>
		<div class="btn-wrapper">
			<button class="mini-btn" on:click={callback}>확인</button>
		</div>
	</div>
</div>

<style>
	.modalWrapper {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: rgba(0, 0, 0, 0.7);
	}

	.modalContainer {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		padding: 1rem;
		border-radius: 16px;
		min-width: 16rem;
	}

	.btn-wrapper {
		text-align: center;
	}

	button {
		margin: auto;
	}
</style>
