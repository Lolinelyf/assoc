<script setup>
  const props = defineProps({
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  });

  function alt(el) {
    return el.split('/').pop().split('.').shift();
  }
</script>
<template>
  <div :class="$style.item">
    <img :src="props.img" :alt="alt(props.img)" :class="$style.img" />
    <p>{{ props.text }}</p>
  </div>
</template>
<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4rem;
    width: 100%;
    &:not(:last-child)::before {
      content: url(/images/icons/arrow.svg);
      display: block;
      position: absolute;
      width: 40px;
      height: 24px;
      right: -4.5rem;
      top: 1rem;

      @media (min-width: $tablet-size-port) {
        width: 65px;
        height: 35px;
        right: -4rem;
        top: 0;
      }

      @media (min-width: $tablet-size-land) {
        width: 100px;
        height: 55px;
        right: -11rem;
        top: 3rem;
      }
    }

    & > p {
      display: none;
      @media (min-width: $tablet-size-land) {
        display: block;
        font-size: 1.4rem;
        color: #fff;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  .img {
    width: 52px;
    height: 52px;
    object-fit: contain;
    filter: drop-shadow(1px 1px 5px #4d75ca81);

    @media (min-width: $tablet-size-land) {
      width: 120px;
      height: 120px;
    }
  }
</style>
