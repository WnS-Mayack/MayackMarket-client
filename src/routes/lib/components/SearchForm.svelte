<script lang="ts">
	import { locations } from '../constants';
	export let searchData: {
		location: string;
		searchText: string;
		minPrice: number | null;
		maxPrice: number | null;
	};
</script>

<section class="searchForm-wrapper">
	<div class="search-container">
		<label for="location">지역</label>
		<select bind:value={searchData.location} name="location">
			{#each locations as location}
				<option value={location}>{location}</option>
			{/each}
		</select>
	</div>
	<div class="search-container">
		<label for="serachText">검색어</label>
		<input
			type="text"
			bind:value={searchData.searchText}
			name="searchText"
			placeholder="검색어 입력"
		/>
	</div>
	<div class="search-container">
		<label for="price">가격</label>
		<input type="number" bind:value={searchData.minPrice} name="minPrice" placeholder="최소 가격" />
		<span> ~ </span>
		<input type="number" bind:value={searchData.maxPrice} name="maxPrice" placeholder="최대 가격" />
	</div>
	<button class="mini-btn" on:click>검색하기</button>
</section>

<style>
	.searchForm-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.search-container {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	label {
		min-width: 4rem;
	}

	select,
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
</style>
