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
    height: 270px;
    padding: 2rem;
    border-radius: 6px;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #0000004d 10%, #ffffff00 90%),
      linear-gradient(0deg, #083266, #003dae);

    @media (min-width: $tablet-size-port) {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
  .title {
    color: #fff;
    text-transform: none;
    font-size: 1.6rem;

    @media (min-width: $tablet-size-port) {
      font-size: 2rem;
    }
  }

  .background {
    position: absolute;
    display: block;
    bottom: 2rem;
    right: 2rem;
    width: 70px;
    height: 70px;
    object-fit: contain;

    @media (min-width: $tablet-size-land) {
      width: 120px;
      height: 120px;
    }
  }
</style>
