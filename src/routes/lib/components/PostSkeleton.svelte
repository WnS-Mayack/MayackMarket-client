<script>
	import BoxSkeleton from './BoxSkeleton.svelte';

	const numberArr = Array.from(Array(4));
</script>

<div class="post-skeletons-wrapper">
	{#each numberArr as arr}
		<div class="skeleton-wrapper">
			<BoxSkeleton width={250} height={250} />
			<BoxSkeleton width={150} height={25} />
			<BoxSkeleton width={250} height={25} />
		</div>
	{/each}
</div>

<style>
	.post-skeletons-wrapper {
		display: grid;
		align-self: flex-start;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;
	}

	.skeleton-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
