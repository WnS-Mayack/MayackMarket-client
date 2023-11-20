import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from './ssr-91264a9a.js';
import { M as Modal } from './Modal-aa042aa6.js';

const css = {
  code: ".login-wrapper.svelte-153fsz8{position:absolute;display:flex;flex-direction:column;align-items:center;gap:2rem;left:50%;top:50%;transform:translate(-50%, -50%)}.login-form.svelte-153fsz8{display:flex;flex-direction:column;gap:3rem}.error.svelte-153fsz8{position:absolute;width:max-content;right:0;top:120%;font-size:0.8rem;font-weight:700;color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="login-wrapper svelte-153fsz8"><h1 data-svelte-h="svelte-1wsy7a9">Login</h1> <form class="login-form svelte-153fsz8" method="POST" action="?/submit"><div class="input-wrapper"><input class="form-input"${add_attribute("value", data.userId || "", 0)} type="text" name="userId" autocomplete="off" required> <label for="userId" class="form-label" data-svelte-h="svelte-1mxp1dc">아이디</label> ${form?.missing ? `<span class="error svelte-153fsz8">${escape(form.message)}</span>` : ``}</div> <div class="input-wrapper"><input class="form-input"${add_attribute("value", data.password || "", 0)} type="password" name="password" autocomplete="off" required> <label for="password" class="form-label" data-svelte-h="svelte-euaw3j">비밀번호</label> ${form?.invalid ? `<span class="error svelte-153fsz8">${escape(form.message)}</span>` : ``}</div> <button class="custom-btn" data-svelte-h="svelte-q3krv7">로그인</button></form> <span data-svelte-h="svelte-74gzv7"><a href="/signUp">회원가입</a></span></div> ${form?.error ? `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      title: "로그인 실패",
      content: "아이디 비밀번호를 확인하고 다시 시도해주세요.",
      type: "error",
      callback: () => {
        form = null;
      }
    },
    {},
    {}
  )}` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3a938d88.js.map
