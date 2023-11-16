import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(301, '/');
	}
	// searchData를 기본값으로 초기화합니다.
	const formData = {
		title: '',
		location: locals.user.location,
		price: 0,
		images: [],
		content: ''
	};

	return { formData };
};

export const actions: Actions = {
	async default({ request }: { request: Request }) {
		const data = await request.formData();
		const title = data.get('title') as string;
		const location = data.get('location') as string;

		console.log(title, location);
	}
};
