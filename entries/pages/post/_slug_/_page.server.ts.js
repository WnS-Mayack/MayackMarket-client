import { r as redirect } from "../../../../chunks/index.js";
import axios from "axios";
const load = async ({ locals, params }) => {
  if (!locals.user) {
    throw redirect(301, "/");
  }
  const headers = {
    account: locals.user.userId
  };
  const { slug } = params;
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
export {
  load
};
