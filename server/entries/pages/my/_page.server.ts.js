import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(301, "/");
  }
};
const actions = {
  signOut: async ({ cookies }) => {
    cookies.set("account", "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
    });
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};
