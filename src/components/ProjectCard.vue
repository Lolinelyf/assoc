<script setup>
  const props = defineProps({
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  });
  function alt(el) {
    return el.split('/').pop().split('.').shift();
  }
</script>
<template>
  <a :href="props.href" :class="$style.card">
    <h3 :class="$style.title" class="title">
      {{ props.title }}
    </h3>
    <img :src="props.img" :alt="alt(props.img)" :class="$style.img" />
  </a>
</template>
<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .card {
    display: block;
    position: relative;
    padding: 1rem;
    height: 200px;
    border-radius: 6px;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    &::after {
      content: url(/images/icons/info.svg);
      position: absolute;
      width: 25px;
      height: 25px;
      -o-object-fit: contain;
      object-fit: contain;
      right: 1rem;
      bottom: 1rem;
    }
  }
  .title {
    position: relative;
    color: #fff;
    z-index: 1;
    text-transform: none;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.6rem;
    font-size: 1.4rem;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.596));
  }

  .img {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 6px;
    object-fit: cover;
    filter: brightness(0.7);
    transition: filter 0.25s;
  }
</style>
