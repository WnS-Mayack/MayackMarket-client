<script lang="ts">
	export let searchData: {
		location: string;
		searchText: string;
		minPrice: number | null;
		maxPrice: number | null;
	};
</script>

<section class="searchForm-wrapper">
	<input type="text" bind:value={searchData.location} />
	<input type="text" bind:value={searchData.searchText} />
	<input type="number" bind:value={searchData.minPrice} />
	<input type="number" bind:value={searchData.maxPrice} />
	<button on:click>검색하기</button>
</section>

<style>
	.searchForm-wrapper {
		display: flex;
		gap: 0.5rem;
		margin: 1rem 0;
	}
</style>
