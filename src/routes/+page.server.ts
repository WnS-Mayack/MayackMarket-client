import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// searchData를 기본값으로 초기화합니다.
	const searchData = {
		searchText: '',
		location: '서울',
		minPrice: null,
		maxPrice: null
	};

	if (locals.user) {
		searchData.location = locals.user.location;
	}

	// TODO: 쿼리 매개변수를 기반으로 searchData를 수정합니다 (예: 관심 키워드)
	// 예: searchData.searchText = '기본 검색어';

	return { searchData };
};
