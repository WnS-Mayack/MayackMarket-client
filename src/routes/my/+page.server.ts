import { redirect, type Cookies } from '@sveltejs/kit';
import { base } from '$app/paths';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(301, `${base}/`);
	}
};

export const actions: Actions = {
	signOut: async ({ cookies }: { cookies: Cookies }) => {
		cookies.set('account', '', {
			path: `${base}/`,
			expires: new Date(0)
		});

		throw redirect(303, `${base}/`);
	}
};
