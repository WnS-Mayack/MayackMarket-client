import { c as create_ssr_component, f as each, v as validate_component, d as add_attribute, e as escape } from './ssr-91264a9a.js';
import { l as locations } from './index2-080a3ad4.js';
import { g as goto } from './navigation-a410b94d.js';
import { M as Modal } from './Modal-aa042aa6.js';

const css = {
  code: "input.svelte-1leuj0q,select.svelte-1leuj0q,textarea.svelte-1leuj0q{width:100%;flex:1;border:1px solid #e0e0e0;padding:8px;border-radius:8px;display:block;margin:auto;font-size:1rem;background-size:20px;padding-left:12px}label.svelte-1leuj0q{min-width:4rem}textarea.svelte-1leuj0q{resize:none;height:25vh;overflow-y:scroll}.write-wrapper.svelte-1leuj0q{margin-top:2rem;margin-left:auto;margin-right:auto;width:50%;display:flex;flex-direction:column;gap:1.5rem;align-items:stretch}.single-form-wrapper.svelte-1leuj0q{width:100%;display:flex;align-items:center;gap:1rem}.img-input.svelte-1leuj0q{display:none}.preview-image.svelte-1leuj0q{width:15rem;height:15rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<form class="write-wrapper svelte-1leuj0q" method="POST"><div class="single-form-wrapper svelte-1leuj0q" data-svelte-h="svelte-ddkdau"><label for="title" class="svelte-1leuj0q">제목</label> <input type="text" name="title" class="svelte-1leuj0q"></div> <div class="single-form-wrapper svelte-1leuj0q"><label for="location" class="svelte-1leuj0q" data-svelte-h="svelte-1ktry9y">지역</label> <select name="location" class="svelte-1leuj0q">${each(locations, (location) => {
    return `<option${add_attribute("value", location, 0)}>${escape(location)}</option>`;
  })}</select></div> <div class="single-form-wrapper svelte-1leuj0q" data-svelte-h="svelte-60hzje"><label for="price" class="svelte-1leuj0q">가격</label> <input type="number" name="price" class="svelte-1leuj0q"></div> <div class="single-form-wrapper svelte-1leuj0q"><label for="images" class="svelte-1leuj0q" data-svelte-h="svelte-f78ers">사진</label> <input class="img-input svelte-1leuj0q" type="file" accept="image/*" name="images"> <button class="mini-btn" type="button" data-svelte-h="svelte-as1qjl">이미지 추가하기</button> ${``}</div> <div class="single-form-wrapper svelte-1leuj0q" data-svelte-h="svelte-nq71a4"><label for="content" class="svelte-1leuj0q">내용</label> <textarea name="content" class="svelte-1leuj0q"></textarea></div> <button class="custom-btn" data-svelte-h="svelte-i9obzv">판매하기</button></form> ${form?.success ? `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      title: "게시글 업로드 성공",
      content: "게시글을 성공적으로 업로드했습니다!",
      type: "success",
      callback: () => goto("/")
    },
    {},
    {}
  )}` : ``} ${form?.error ? `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      title: "게시글 업로드 실패",
      content: "서버오류로 게시글 업로드에 실패했습니다. 다시 시도해주세요",
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
//# sourceMappingURL=_page.svelte-e46c53d2.js.map
