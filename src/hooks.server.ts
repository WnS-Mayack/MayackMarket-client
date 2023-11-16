import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('login-session');

	if (!session) {
		return await resolve(event);
	}

	// 유저 데이터 get
	// const user = await db.user.findUnique({
	// 	where: { userAuthToken: session },
	// 	select: { username: true, role: true }
	// });

	if (session) {
		event.locals.user = {
			nickname: '임시',
			userId: 'temp',
			location: '서울',
			img: ''
		};
	}

	// 유저데이터 전역저장
	// if (user) {
	// 	event.locals.user = {
	// 		username: user.username,
	// 		role: user.role
	// 	};
	// }

	return await resolve(event);
};
