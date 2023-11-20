import type { Handle } from '@sveltejs/kit';
import axios from 'axios';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('account');

	if (!session) {
		return await resolve(event);
	}

	const headers = {
		account: session
	};

	const res = await axios.get(`http://43.201.161.245:8080/api/users`, { headers });

	const { nickname, profileImgPath, account, region } = res.data;

	if (session) {
		event.locals.user = {
			nickname,
			userId: account,
			location: region,
			img: profileImgPath
		};
	}

	return await resolve(event);
};
