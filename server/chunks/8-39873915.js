import { r as redirect, f as fail } from './index-0087e825.js';
import axios from 'axios';

const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(301, "/");
  }
  const formData = {
    title: "",
    location: locals.user.location,
    price: 0,
    images: [],
    content: ""
  };
  return { formData };
};
const actions = {
  async default({ request, cookies }) {
    const data = await request.formData();
    const title = data.get("title");
    const location = data.get("location");
    const price = data.get("price");
    const images = data.get("images");
    const content = data.get("content");
    const userId = cookies.get("account");
    const formData = new FormData();
    formData.append("file", images);
    let imgDataUrl;
    try {
      const res = await axios.post(
        `${process.env.VUE_APP_IMAGE_BASE_URL}/post/mayack/${userId}`,
        formData
      );
      imgDataUrl = res.data;
    } catch (error) {
      console.error(error);
    }
    const sendData = {
      title,
      description: content,
      price,
      region: location,
      imagePath: imgDataUrl
    };
    let status = true;
    const headers = {
      account: userId
    };
    try {
      await axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/posts`, sendData, {
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
      console.log("fail");
      return fail(403, {
        description: "post failed",
        error: true
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e46c53d2.js')).default;
const server_id = "src/routes/write/+page.server.ts";
const imports = ["_app/immutable/nodes/8.717e263d.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.3578fc18.js","_app/immutable/chunks/forms.7cf6fc01.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.3a2bae30.js","_app/immutable/chunks/navigation.e6d5941f.js","_app/immutable/chunks/Modal.33b9a361.js"];
const stylesheets = ["_app/immutable/assets/8.f8c0ee74.css","_app/immutable/assets/Modal.843bbf42.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-39873915.js.map
