import { a as useState } from "../server.mjs";
import { unref, useSSRContext } from "vue";
import "destr";
import "./app.config-b00a2f3f.js";
import { ssrInterpolate } from "vue/server-renderer";
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
const useColor = () => useState("color", () => "pink");
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const color = useColor();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div> login </div><p>Current color: ${ssrInterpolate(unref(color))}</p><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-4269e279.js.map
