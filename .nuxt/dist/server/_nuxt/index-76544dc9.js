import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext, defineComponent, withCtx, createTextVNode, unref } from "vue";
import { _ as _export_sfc, u as useRequestHeaders } from "../server.mjs";
import { u as useLazyAsyncData } from "./asyncData-5f81582c.js";
import "destr";
import "./app.config-b00a2f3f.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppAlert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRequestHeaders(["cookie"]);
    const { pending, data: count } = useLazyAsyncData(
      "count",
      () => $fetch("/api/count")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppAlert = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fdcbd0c8><h1 data-v-fdcbd0c8>Welcome to the homepage</h1>`);
      _push(ssrRenderComponent(_component_AppAlert, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` This is an auto-imported component `);
          } else {
            return [
              createTextVNode(" This is an auto-imported component ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-fdcbd0c8>${ssrInterpolate(unref(pending) ? "Loading" : unref(count))}</div><button data-v-fdcbd0c8>Refresh</button></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_fdcbd0c8_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fdcbd0c8"]]);
export {
  index as default
};
//# sourceMappingURL=index-76544dc9.js.map
