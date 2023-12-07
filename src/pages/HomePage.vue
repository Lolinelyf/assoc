<script setup>
  import SwiperMain from '@/components/SwiperMain.vue';
  import BannerMainViews from '@/views/BannerMainViews.vue';
  import SocialLinksViews from '@/views/SocialLinksViews.vue';
  import CitationViews from '@/views/CitationViews.vue';
</script>
<template>
  <SwiperMain />
  <div class="container">
    <CitationViews />
  </div>
  <BannerMainViews />

  <div class="container">
    <SocialLinksViews />
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
</style>
