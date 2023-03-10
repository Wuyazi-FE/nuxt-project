<template>
  <div>
    login
  </div>
  <p>Current color: {{ color }}</p>
</template>
<script setup>
const color = useColor() // Same as useState('color')
</script>

<style scoped>

</style>