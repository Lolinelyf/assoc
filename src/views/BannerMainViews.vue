<script setup>
  import BannerMain from '@/components/BannerMain.vue';
  import { getBannerItems } from '@/api/BannerMain.js';
</script>
<template>
  <section :class="$style.banner">
    <div class="container">
      <h2 :class="$style.title" class="title">
        Как стать участником ассоциации?
      </h2>
      <div :class="$style.flex_banner">
        <BannerMain
          :class="$style.item_banner"
          v-for="item in getBannerItems()"
          :key="item.id"
          :img="item.img"
          :text="item.text"
        />
      </div>
      <div :class="$style.container">
        <a href="form.html" class="button button--white">Стать участником</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .banner {
    position: relative;
    background: linear-gradient(360deg, #00000096 10%, #ffffff00 90%),
      linear-gradient(135deg, #0000004d 10%, #ffffff00 90%),
      linear-gradient(45deg, #083266, #085ffe);
    overflow: hidden;
    color: #fff;
    padding: 2rem 0;
    margin-bottom: 2rem;

    @media (min-width: $tablet-size-land) {
      background:
        linear-gradient(0deg, #00000021 10%, #ffffff00, #ffffff00 35% 100%),
        bottom -5rem right -8rem/45rem no-repeat
          url('/images/icons/background-logo.svg'),
        linear-gradient(135deg, #0000004d 10%, #ffffff00 90%),
        linear-gradient(0deg, #083266, #003dae);
      padding: 4rem 0;
      margin-bottom: 4rem;
    }
  }
  .title {
    color: #fff;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    @media (min-width: $tablet-size-port) {
      font-size: 2rem;
      padding-bottom: 4rem;
    }
  }

  .flex_banner {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;

    @media (min-width: $tablet-size-port) {
      padding-bottom: 4rem;
    }
  }

  .item_banner {
    flex: 0 0 52px;
    height: 52px;

    @media (min-width: $tablet-size-port) {
      flex: 0 0 196px;
      height: 240px;
    }
  }

  .container {
    display: flex;
    justify-content: center;
  }
</style>
