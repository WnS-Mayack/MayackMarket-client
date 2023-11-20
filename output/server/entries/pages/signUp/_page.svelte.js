import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { g as goto } from "../../../chunks/navigation.js";
import "devalue";
import { l as locations } from "../../../chunks/index2.js";
import { A as Avatar } from "../../../chunks/Avatar.js";
import { M as Modal } from "../../../chunks/Modal.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".signUp-wrapper.svelte-p7nlez{position:absolute;display:flex;flex-direction:column;align-items:center;gap:2rem;left:50%;top:50%;transform:translate(-50%, -50%)}.signUp-form.svelte-p7nlez{display:flex;flex-direction:column;gap:3rem}.select-img-wrapper.svelte-p7nlez{position:relative;display:flex;gap:1rem;align-items:center}.flex-none.svelte-p7nlez{flex:none}.img-input.svelte-p7nlez{display:none}.error.svelte-p7nlez{position:absolute;width:max-content;right:0;top:120%;font-size:0.8rem;font-weight:700;color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let imgString = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="signUp-wrapper svelte-p7nlez"><h1 data-svelte-h="svelte-z6o87r">회원가입</h1> <form class="signUp-form svelte-p7nlez" method="POST" action="?/submit"><div class="input-wrapper"><input class="form-input"${add_attribute("value", data.userId || "", 0)} type="text" name="userId" autocomplete="off" required> <label for="userId" class="form-label" data-svelte-h="svelte-1mxp1dc">아이디</label> ${form?.missingId ? `<span class="error svelte-p7nlez">${escape(form.message)}</span>` : ``}</div> <div class="input-wrapper"><input class="form-input"${add_attribute("value", data.password || "", 0)} type="password" name="password" autocomplete="off" required> <label for="password" class="form-label" data-svelte-h="svelte-euaw3j">비밀번호</label> ${form?.invalid ? `<span class="error svelte-p7nlez">${escape(form.message)}</span>` : ``}</div> <div class="input-wrapper"><select class="form-input"${add_attribute("value", data.location || "선택", 0)} name="location" autocomplete="off" required>${each(locations, (location) => {
    return `<option${add_attribute("value", location, 0)}>${escape(location)}</option>`;
  })}</select> <label for="password" class="form-label" data-svelte-h="svelte-wvysmj">활동지역</label> ${form?.missingLoc ? `<span class="error svelte-p7nlez">${escape(form.message)}</span>` : ``}</div> <div class="input-wrapper"><input class="form-input"${add_attribute("value", data.nickname || "", 0)} type="text" name="nickname" autocomplete="off" required> <label for="password" class="form-label" data-svelte-h="svelte-5u79oc">닉네임</label> ${form?.missingLoc ? `<span class="error svelte-p7nlez">${escape(form.message)}</span>` : ``}</div> <div class="select-img-wrapper svelte-p7nlez"><label for="profileImg" data-svelte-h="svelte-17kvfym">프로필이미지</label> <input class="img-input svelte-p7nlez"${add_attribute("value", data.profileImg || "", 0)} name="profileImg" type="file" accept="image/*"> ${validate_component(Avatar, "Avatar").$$render($$result, { imgString, size: 60 }, {}, {})} <button type="button" class="mini-btn flex-none svelte-p7nlez" data-svelte-h="svelte-l5h2m9">이미지 넣기</button> ${form?.missingImg ? `<span class="error svelte-p7nlez">${escape(form.message)}</span>` : ``}</div> <button class="custom-btn" data-svelte-h="svelte-1i16uti">회원가입</button></form></div> ${form?.success ? `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      title: "회원가입 성공",
      content: "로그인하러 가보시죠!",
      type: "success",
      callback: () => goto("/signIn")
    },
    {},
    {}
  )}` : ``} ${form?.error ? `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      title: "회원가입 실패",
      content: "서버오류로 회원가입에 실패했습니다. 다시 시도해주세요",
      type: "error",
      callback: () => {
        form = null;
      }
    },
    {},
    {}
  )}` : ``}`;
});
export {
  Page as default
};
