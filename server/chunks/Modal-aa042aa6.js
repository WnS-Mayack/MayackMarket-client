import { c as create_ssr_component, e as escape } from './ssr-91264a9a.js';

/* empty css                                     */const css = {
  code: ".modalWrapper.svelte-hh8wkd{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;background:rgba(0, 0, 0, 0.7)}.modalContainer.svelte-hh8wkd{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:white;padding:1rem;border-radius:16px;min-width:16rem}.btn-wrapper.svelte-hh8wkd{text-align:center}button.svelte-hh8wkd{margin:auto}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { content } = $$props;
  let { type } = $$props;
  let { callback } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.callback === void 0 && $$bindings.callback && callback !== void 0)
    $$bindings.callback(callback);
  $$result.css.add(css);
  return `<div class="modalWrapper svelte-hh8wkd"><div class="modalContainer svelte-hh8wkd"><h3 style="${"color: " + escape(type === "success" ? "green" : "red", true)}">${escape(title)}</h3> <p>${escape(content)}</p> <div class="btn-wrapper svelte-hh8wkd"><button class="mini-btn svelte-hh8wkd" data-svelte-h="svelte-ydtymr">확인</button></div></div> </div>`;
});

export { Modal as M };
//# sourceMappingURL=Modal-aa042aa6.js.map
