<script setup>
  import { RouterView } from 'vue-router';
  import HeaderViews from '@/views/HeaderViews.vue';
  import NavigationViews from '@/views/NavigationViews.vue';
  import FooterViews from '@/views/FooterViews.vue';
</script>

<template>
  <HeaderViews />
  <NavigationViews />
  <main :class="$style.main">
    <RouterView />
  </main>

  <FooterViews />
</template>

<style module>
  .main {
    flex: 1 1 auto;
  }
</style>
