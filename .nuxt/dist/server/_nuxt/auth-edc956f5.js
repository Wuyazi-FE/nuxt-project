import { f as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import "vue";
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
import "vue/server-renderer";
import "defu";
const auth = defineNuxtRouteMiddleware((to, from) => {
  {
    return navigateTo("/login");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-edc956f5.js.map
