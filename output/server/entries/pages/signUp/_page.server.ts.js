import { f as fail } from "../../../chunks/index.js";
import axios from "axios";
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
export {
  actions
};
