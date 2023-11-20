import type { PageServerLoad } from './$types';
import { redirect, fail, type Cookies } from '@sveltejs/kit';
import { base } from '$app/paths';
import type { Actions } from './$types';
import axios from 'axios';

export const prerender = false;

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(301, `${base}/`);
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
	async default({ request, cookies }: { request: Request; cookies: Cookies }) {
		const data = await request.formData();
		const title = data.get('title') as string;
		const location = data.get('location') as string;
		const price = data.get('price') as string;
		const images = data.get('images') as File;
		const content = data.get('content') as string;

		// 이미지 저장
		const userId = cookies.get('account');

		const formData = new FormData();
		formData.append('file', images);

		let imgDataUrl;

		try {
			const res = await axios.post(`http://168.188.123.234:8080/post/mayack/${userId}`, formData);
			imgDataUrl = res.data;
		} catch (error) {
			console.error(error);
		}

		// 판매 로직
		const sendData = {
			title,
			description: content,
			price,
			region: location,
			imagePath: imgDataUrl
		};

		let status = true;

		const headers = {
			account: userId
		};

		try {
			await axios.post(`http://43.201.161.245:8080/api/posts`, sendData, {
				headers
			});
			status = true;
		} catch (error) {
			console.error(error);
			status = false;
		}

		if (status) {
			return { success: true };
		} else {
			console.log('fail');
			return fail(403, {
				description: 'post failed',
				error: true
			});
		}
	}
};
