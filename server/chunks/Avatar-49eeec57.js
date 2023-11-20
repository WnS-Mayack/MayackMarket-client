import { c as create_ssr_component, e as escape, d as add_attribute } from './ssr-91264a9a.js';

const css = {
  code: "div.svelte-1ct8uul{border:1px solid gray;border-radius:50%;overflow:hidden;margin:0 auto}img.svelte-1ct8uul{width:100%;height:100%;object-fit:contain}",
  map: null
};
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imgString } = $$props;
  let { size } = $$props;
  if ($$props.imgString === void 0 && $$bindings.imgString && imgString !== void 0)
    $$bindings.imgString(imgString);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<div style="${"width: " + escape(size, true) + "px; height: " + escape(size, true) + "px;"}" class="svelte-1ct8uul">${imgString !== "" ? `<img${add_attribute("src", imgString, 0)} alt="프로필 이미지" class="svelte-1ct8uul">` : ``} </div>`;
});

export { Avatar as A };
//# sourceMappingURL=Avatar-49eeec57.js.map
