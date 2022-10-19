<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavVue from './components/Nav.vue';
</script>

<template>
  <header>

    <NavVue></NavVue>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
