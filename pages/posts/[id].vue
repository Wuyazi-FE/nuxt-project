<template>
  <section>
    <p>{{ route.params.id }}</p>
    <h1>{{ organization.login }}</h1>
    <p>{{ organization.description }}</p>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id);
  },
});
useServerSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
// When accessing /posts/1, route.params.id will be 1
const [{ data: organization }, { data: repos }] = await Promise.all([
  useFetch(`https://api.github.com/orgs/nuxt`),
  useFetch(`https://api.github.com/orgs/nuxt/repos`),
]);
</script>
