import { redirect, type Cookies } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(301, '/');
	}
};

export const actions: Actions = {
	default({ cookies }: { cookies: Cookies; request: Request }) {
		cookies.set('account', '', {
			path: '/',
			expires: new Date(0)
		});

		throw redirect(303, '/');
	}
};
