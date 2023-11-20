import { f as fail } from './index-0087e825.js';
import axios from 'axios';

const actions = {
  submit: async ({ request }) => {
    const data = await request.formData();
    const userId = data.get("userId");
    const password = data.get("password");
    const location = data.get("location");
    const nickname = data.get("nickname");
    const profileImg = data.get("profileImg");
    if (!userId) {
      return fail(400, { userId, missingId: true, message: "이메일은 필수 입니다." });
    }
    if (!password || password.length < 8) {
      return fail(400, { password, invalid: true, message: "비밀번호는 8자 이상 입니다." });
    }
    if (!location) {
      return fail(400, { location, missingLoc: true, message: "지역은 필수 입니다." });
    }
    if (!nickname) {
      return fail(400, { nickname, missingNic: true, message: "닉네임은 필수 입니다." });
    }
    if (profileImg.name === "undefined") {
      return fail(400, { profileImg, missingImg: true, message: "프로필이미지는 필수 입니다." });
    }
    const headers = {
      account: userId
    };
    const formData = new FormData();
    formData.append("file", profileImg);
    let imgDataUrl;
    try {
      const res = await axios.post(
        `${process.env.VUE_APP_IMAGE_BASE_URL}/user/mayack/${userId}`,
        formData
      );
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
      await axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/users/sign-up`, sendData, {
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
        description: "signUp failed",
        error: true
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f02b2994.js')).default;
const server_id = "src/routes/signUp/+page.server.ts";
const imports = ["_app/immutable/nodes/7.faf7ee06.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/navigation.e6d5941f.js","_app/immutable/chunks/singletons.3a2bae30.js","_app/immutable/chunks/forms.7cf6fc01.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/index.3578fc18.js","_app/immutable/chunks/Avatar.68ec2227.js","_app/immutable/chunks/Modal.33b9a361.js"];
const stylesheets = ["_app/immutable/assets/7.24509432.css","_app/immutable/assets/Avatar.86c8d3dc.css","_app/immutable/assets/Modal.843bbf42.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-563a1955.js.map
