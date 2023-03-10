<template>
  <div>
    <h1>Welcome to the homepage</h1>

    <AppAlert> This is an auto-imported component </AppAlert>

    <div>
      {{ pending ? "Loading" : count }}
    </div>
    <button @click="refresh">Refresh</button>
  </div>
</template>
<script setup lang="ts">
// useHead({
//   title: 'My App',
//   meta: [
//     { name: 'description', content: 'My amazing site.' }
//   ],
//   bodyAttrs: {
//     class: 'test'
//   },
//   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
// })
// definePageMeta({
//   pageTransition: {
//     name: 'bounce',
//     mode: 'out-in' // default
//   }
// })
// const { data } = await useAsyncData('count', () => $fetch('/api/count'))
// const { data: count } = await useFetch('/api/count')
const headers = useRequestHeaders(['cookie'])
const { pending, data: count } = useLazyAsyncData("count", () =>
  $fetch("/api/count"),
);
const refresh = () => refreshNuxtData("count");
</script>
<style scoped>
h1 {
  color: "$primary";
}
</style>