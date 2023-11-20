import { r as redirect, f as fail } from './index-0087e825.js';
import axios from 'axios';

const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(301, "/");
  }
};
const actions = {
  submit: async ({ cookies, request }) => {
    const data = await request.formData();
    const userId = data.get("userId");
    const password = data.get("password");
    if (!userId) {
      return fail(400, { userId, missing: true, message: "이메일은 필수 입니다." });
    }
    if (!password || password.length < 8) {
      return fail(400, { password, invalid: true, message: "비밀번호는 8자 이상 입니다." });
    }
    let status = true;
    const sendData = {
      account: userId,
      password
    };
    try {
      await axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/users/login`, sendData);
      status = true;
    } catch (error) {
      status = false;
      console.log(error);
    }
    if (status) {
      cookies.set("account", userId, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30
      });
      throw redirect(303, "/");
    } else {
      return fail(403, {
        description: "login failed",
        error: "error message"
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3a938d88.js')).default;
const server_id = "src/routes/signIn/+page.server.ts";
const imports = ["_app/immutable/nodes/6.2678f1ce.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/forms.7cf6fc01.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.3a2bae30.js","_app/immutable/chunks/navigation.e6d5941f.js","_app/immutable/chunks/Modal.33b9a361.js"];
const stylesheets = ["_app/immutable/assets/6.bc7527c2.css","_app/immutable/assets/Modal.843bbf42.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-d610b886.js.map
