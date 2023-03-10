import { e as useNuxtApp } from './server.mjs';
import { useSeoMeta } from '@unhead/vue';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
const useServerSeoMeta = (meta) => {
  {
    return useSeoMeta(meta);
  }
};

export { useServerSeoMeta as a, useHead as u };
//# sourceMappingURL=composables-f3553fc2.mjs.map
