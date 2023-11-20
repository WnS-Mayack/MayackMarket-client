// @ts-nocheck
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';

export const load = async ({ locals, params }: Parameters<PageServerLoad>[0]) => {
	if (!locals.user) {
		throw redirect(301, '/');
	}
	const headers = {
		account: locals.user.userId
	};
	const { slug } = params;

	// TODO: 게시글 상세 내역 불러와서 넘기기
	const res = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/posts/${slug}`, {
		headers
	});

	const postData = res.data;
	const {
		description,
		imagePath,
		price,
		title,
		author,
		likeCount,
		seenCount,
		comments,
		itemStatus
	} = postData;

	const { account, nickname: sellerNickname, profileImgPath: sellerImg } = author;

	const isSeller = account === locals.user.userId;

	return {
		postId: slug,
		userId: locals.user.userId,
		title,
		description,
		imagePath,
		price,
		likeCount,
		seenCount,
		comments,
		itemStatus,
		isSeller,
		sellerNickname,
		sellerImg
	};
};
