import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
/* empty css                                     */const PostList_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@charset "UTF-8";.post-wrapper.svelte-fxfegb.svelte-fxfegb{display:flex;flex-direction:column;cursor:pointer;text-decoration:none;color:inherit}.post-img-wrapper.svelte-fxfegb.svelte-fxfegb{width:250px;height:250px;background-color:gray;border-radius:16px}.post-img-wrapper.svelte-fxfegb img.svelte-fxfegb{width:100%;height:100%;object-fit:cover}.post-footer.svelte-fxfegb.svelte-fxfegb{display:flex;justify-content:space-between;align-items:center}',
  map: null
};
const PostList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { searchResult } = $$props;
  const { id, title, price, seenCount, likeCount, imagePath } = searchResult;
  if ($$props.searchResult === void 0 && $$bindings.searchResult && searchResult !== void 0)
    $$bindings.searchResult(searchResult);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="post-wrapper svelte-fxfegb"><div class="post-img-wrapper svelte-fxfegb"><img${add_attribute("src", `http://168.188.123.234:8080${imagePath}`, 0)} alt="판매 이미지" class="svelte-fxfegb"></div> <span class="post-title">${escape(title)}</span> <div class="post-footer svelte-fxfegb"><span class="post-price">${escape(price.toLocaleString())}</span> <div class="post-sub"><span>조회수: ${escape(seenCount)}</span> <span>좋아요: ${escape(likeCount)}</span></div></div></div> ${``}`;
});
const BoxSkeleton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-7cen8o{display:inline-block;border-radius:4px;background-image:linear-gradient(90deg, #dfe3e8 0px, #efefef 40px, #dfe3e8 80px);background-size:200% 100%;background-position:0 center;animation:svelte-7cen8o-skeleton--zoom-in 0.2s ease-out, svelte-7cen8o-skeleton--loading 2s infinite linear}@keyframes svelte-7cen8o-skeleton--zoom-in{0%{opacity:0;transform:scale(0.95)}100%{opacity:1;transform:scale(1)}}@keyframes svelte-7cen8o-skeleton--loading{0%{background-position-x:100%}50%{background-position-x:-100%}100%{background-position-x:-100%}}",
  map: null
};
const BoxSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$1);
  return `<div style="${"width: " + escape(width, true) + "px; height: " + escape(height, true) + "px"}" class="svelte-7cen8o"></div>`;
});
const PostSkeleton_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-skeletons-wrapper.svelte-hgta7h{display:grid;align-self:flex-start;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem}.skeleton-wrapper.svelte-hgta7h{display:flex;flex-direction:column;gap:1rem}",
  map: null
};
const PostSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const numberArr = Array.from(Array(4));
  $$result.css.add(css);
  return `<div class="post-skeletons-wrapper svelte-hgta7h">${each(numberArr, (arr) => {
    return `<div class="skeleton-wrapper svelte-hgta7h">${validate_component(BoxSkeleton, "BoxSkeleton").$$render($$result, { width: 250, height: 250 }, {}, {})} ${validate_component(BoxSkeleton, "BoxSkeleton").$$render($$result, { width: 150, height: 25 }, {}, {})} ${validate_component(BoxSkeleton, "BoxSkeleton").$$render($$result, { width: 250, height: 25 }, {}, {})} </div>`;
  })} </div>`;
});
export {
  PostSkeleton as P,
  PostList as a
};
