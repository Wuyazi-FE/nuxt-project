<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Style type="text/css" children="body { background-color: green; }" />
  </Head>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <h1>{{ mountain.title }}</h1>
    <p>{{ mountain.description }}</p>
  </section>
</template>
<script setup>
const title = ref("Hello World");
const { data: mountain } = await useFetch("/api/mountains/everest", {
  pick: ["title", "description"],
});
</script>
