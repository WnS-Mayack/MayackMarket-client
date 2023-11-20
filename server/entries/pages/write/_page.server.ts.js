import { r as redirect, f as fail } from "../../../chunks/index.js";
import axios from "axios";
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
export {
  actions,
  load
};
