import { b as useRoute } from "../server.mjs";
import { defineComponent, withAsyncContext, unref, useSSRContext } from "vue";
import { a as useServerSeoMeta } from "./composables-f3553fc2.js";
import { u as useFetch } from "./fetch-01816f84.js";
import "destr";
import "./app.config-b00a2f3f.js";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
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
import "ohash";
import "./asyncData-5f81582c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useServerSeoMeta({
      title: "My Amazing Site",
      ogTitle: "My Amazing Site",
      description: "This is my amazing site, let me tell you all about it.",
      ogDescription: "This is my amazing site, let me tell you all about it.",
      ogImage: "https://example.com/image.png",
      twitterCard: "summary_large_image"
    });
    const [{ data: organization }, { data: repos }] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useFetch(`https://api.github.com/orgs/nuxt`, "$YTfWtXNtHX"),
      useFetch(`https://api.github.com/orgs/nuxt/repos`, "$GgKJ1BdKWS")
    ])), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><p>${ssrInterpolate(unref(route).params.id)}</p><h1>${ssrInterpolate(unref(organization).login)}</h1><p>${ssrInterpolate(unref(organization).description)}</p></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-7478abce.js.map
