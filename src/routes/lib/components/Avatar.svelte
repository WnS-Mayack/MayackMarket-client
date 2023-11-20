<script lang="ts">
	export let imgString: string;
	export let size: number;
</script>

<div style="width: {size}px; height: {size}px;">
	{#if imgString !== ''}
		<img src={imgString} alt="프로필 이미지" />
	{/if}
</div>

<style>
	div {
		border: 1px solid gray;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
