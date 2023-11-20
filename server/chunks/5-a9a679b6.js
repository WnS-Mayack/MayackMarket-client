import { r as redirect } from './index-0087e825.js';
import axios from 'axios';

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6386e7f7.js')).default;
const server_id = "src/routes/post/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/5.bc4aaed6.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Avatar.68ec2227.js","_app/immutable/chunks/Modal.33b9a361.js","_app/immutable/chunks/axios.28bc18a3.js"];
const stylesheets = ["_app/immutable/assets/5.731565bb.css","_app/immutable/assets/Avatar.86c8d3dc.css","_app/immutable/assets/Modal.843bbf42.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-a9a679b6.js.map
