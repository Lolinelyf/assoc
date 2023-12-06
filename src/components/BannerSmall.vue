<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  });
</script>
<template>
  <div :class="$style.banner">
    <h2 :class="$style.title" class="title">{{ props.title }}</h2>
    <a :href="props.link" class="button button--white">{{ props.action }}</a>
    <img :src="props.img" alt="" :class="$style.background" />
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .banner {
    display: flex;
    position: relative;
    flex-flow: column wrap;
    justify-content: space-between;
    height: 244px;
    padding: 1rem;
    border-radius: 6px;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #0000004d 10%, #ffffff00 90%),
      linear-gradient(0deg, #083266, #003dae);

    @media (min-width: $tablet-size-port) {
      padding: 2rem;
      margin-bottom: 0;
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
  .title {
    color: #fff;
    text-transform: none;
    font-size: 1.2rem;
    margin-bottom: 3rem;

    @media (min-width: $tablet-size-port) {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }

  .background {
    position: absolute;
    display: block;
    object-fit: contain;
    width: 56px;
    height: 56px;
    bottom: 1rem;
    right: 1rem;

    @media (min-width: $tablet-size-land) {
      width: 96px;
      height: 96px;
      bottom: 2rem;
      right: 2rem;
    }
  }
</style>
