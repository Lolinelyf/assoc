<script setup>
  import { RouterLink } from 'vue-router';
</script>
<template>
  <header :class="$style.header">
    <div class="container">
      <RouterLink :class="$style.logo" to="/"
        ><img src="/images/icons/logo.svg" alt="logo" :class="$style.img" />
        <h1 :class="$style.title" class="title">
          <span class="b">Ассоциация выпускников</span> Северо-Кавказского
          федерального университета
        </h1></RouterLink
      >
    </div>
  </header>
</template>

<style module lang="scss">
  @import '@/assets/scss/base/variables.scss';
  .header {
    display: none;
    @media (min-width: $tablet-size-port) {
      display: block;
      background: linear-gradient(20deg, #fff, #f5f5f5);
      padding: 2rem 0;
      width: 100%;
    }
  }

  .logo {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: space-between;
  }

  .img {
    display: block;
    flex: 0 0 140px;
    width: 140px;
    object-fit: contain;

    @media (min-width: $tablet-size-land) {
      flex: 0 0 175px;
      width: 175px;
    }

    @media (min-width: $desktop-size-small) {
      flex: 0 0 175px;
    }
  }

  .title {
    flex: 0 0 75%;
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 400;
    margin-bottom: 0;

    @media (min-width: $tablet-size-land) {
      flex: 0 0 75%;
      font-size: 2.6rem;
      line-height: 3.2rem;
    }

    @media (min-width: $desktop-size-small) {
      flex: 0 0 75%;
      font-size: 3rem;
      line-height: 3.6rem;
    }
  }
</style>
