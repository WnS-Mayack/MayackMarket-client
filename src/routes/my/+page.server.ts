import { redirect, type Cookies } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// TODO: 로그인 된 유저인지 확인
};

export const actions: Actions = {
	logout: async ({ cookies }: { cookies: Cookies; request: Request }) => {
		cookies.set('login-session', '', {
			path: '/',
			expires: new Date(0)
		});

		throw redirect(303, '/');
	}
};
