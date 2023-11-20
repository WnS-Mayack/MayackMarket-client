import { fail } from '@sveltejs/kit';
import axios from 'axios';

export const prerender = false;

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

		const headers = {
			account: userId
		};

		// 프로필 이미지 저장
		const formData = new FormData();
		formData.append('file', profileImg);

		let imgDataUrl;

		try {
			const res = await axios.post(`http://168.188.123.234:8080/user/mayack/${userId}`, formData);
			imgDataUrl = res.data;
			console.log(imgDataUrl);
		} catch (error) {
			console.error(error);
		}
		let status = true;

		const sendData = {
			password,
			nickname,
			account: userId,
			region: location,
			profileImagePath: imgDataUrl
		};

		try {
			await axios.post(`http://43.201.161.245:8080/api/users/sign-up`, sendData, {
				headers
			});
			status = true;
		} catch (error) {
			console.error(error);
			status = false;
		}

		if (status) {
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
