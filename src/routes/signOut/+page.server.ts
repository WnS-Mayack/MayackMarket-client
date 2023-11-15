import { redirect, type Cookies } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('load');
};

export const actions: Actions = {
	default({ cookies }: { cookies: Cookies; request: Request }) {
		console.log('defaults');
		cookies.set('login-session', '', {
			path: '/',
			expires: new Date(0)
		});

		throw redirect(303, '/');
	}
};
