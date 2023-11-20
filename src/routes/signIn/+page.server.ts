import { fail, redirect, type Cookies } from '@sveltejs/kit';
import { base } from '$app/paths';
import type { PageServerLoad } from './$types';
import axios from 'axios';

export const prerender = false;

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(301, `${base}/`);
	}
};

export const actions = {
	submit: async ({ cookies, request }: { cookies: Cookies; request: Request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const password = data.get('password') as string;

		// before call api check
		if (!userId) {
			return fail(400, { userId, missing: true, message: '이메일은 필수 입니다.' });
		}
		if (!password || password.length < 8) {
			return fail(400, { password, invalid: true, message: '비밀번호는 8자 이상 입니다.' });
		}

		let status = true;
		const sendData = {
			account: userId,
			password
		};

		try {
			await axios.post(`http://43.201.161.245:8080/api/users/login`, sendData);
			status = true;
		} catch (error) {
			status = false;
			console.log(error);
		}
		if (status) {
			cookies.set('account', userId, {
				path: `${base}/`,
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 30
			});
			throw redirect(303, `${base}/`);
		} else {
			return fail(403, {
				description: 'login failed',
				error: 'error message'
			});
		}
	}
};
