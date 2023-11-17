import { fail } from '@sveltejs/kit';
import axios from 'axios';

export const actions = {
	submit: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const password = data.get('password') as string;
		const location = data.get('location') as string;
		const nickname = data.get('nickname') as string;
		const profileImg = data.get('profileImg') as File;

		// before call api check
		if (!userId) {
			return fail(400, { userId, missingId: true, message: '이메일은 필수 입니다.' });
		}
		if (!password || password.length < 8) {
			return fail(400, { password, invalid: true, message: '비밀번호는 8자 이상 입니다.' });
		}
		if (!location) {
			return fail(400, { location, missingLoc: true, message: '지역은 필수 입니다.' });
		}
		if (!nickname) {
			return fail(400, { nickname, missingNic: true, message: '닉네임은 필수 입니다.' });
		}
		if (profileImg.name === 'undefined') {
			return fail(400, { profileImg, missingImg: true, message: '프로필이미지는 필수 입니다.' });
		}

		// TODO: api call 이미지 저장하기
		let status = true;

		const sendData = {
			password,
			nickname,
			account: userId,
			region: location,
			profileImagePath: ''
		};

		try {
			await axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/user/sign-up`, sendData);
			status = true;
		} catch (error) {
			console.error(error);
			status = false;
		}

		if (status) {
			// TODO: set-cookie and seesion manage
			return { success: true };
		} else {
			console.log('fail');
			return fail(403, {
				description: 'signUp failed',
				error: true
			});
		}
	}
};
