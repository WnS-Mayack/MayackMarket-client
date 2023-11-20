// @ts-nocheck
import { redirect, type Cookies } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
	if (!locals.user) {
		throw redirect(301, '/');
	}
};

export const actions = {
	signOut: async ({ cookies }: { cookies: Cookies }) => {
		cookies.set('account', '', {
			path: '/',
			expires: new Date(0)
		});

		throw redirect(303, '/');
	}
};
;null as any as Actions;