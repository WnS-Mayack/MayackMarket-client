import { r as redirect, f as fail } from "../../../chunks/index.js";
import axios from "axios";
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
export {
  actions,
  load
};
