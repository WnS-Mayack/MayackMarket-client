import axios from "axios";
const handle = async ({ event, resolve }) => {
  const session = event.cookies.get("account");
  if (!session) {
    return await resolve(event);
  }
  const headers = {
    account: session
  };
  const res = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/users`, { headers });
  const { nickname, profileImgPath, account, region } = res.data;
  if (session) {
    event.locals.user = {
      nickname,
      userId: account,
      location: region,
      img: profileImgPath
    };
  }
  return await resolve(event);
};
export {
  handle
};
