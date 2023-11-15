import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	submit: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const password = data.get('password') as string;

		console.log('userId : ', userId);
		console.log('password : ', password);

		// before call api check
		if (!userId) {
			return fail(400, { userId, missing: true, message: '이메일은 필수 입니다.' });
		}
		if (!password || password.length < 8) {
			return fail(400, { password, invalid: true, message: '비밀번호는 8자 이상 입니다.' });
		}

		// TODO: api call if status.ok ? redirect : error.modal
		const temp = false;

		if (temp) {
			// TODO: set-cookie and seesion manage
			throw redirect(303, '/');
		} else {
			return fail(403, {
				description: 'login failed',
				error: 'error message'
			});
		}
	}
};
