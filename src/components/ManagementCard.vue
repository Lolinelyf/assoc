<script setup>
  const props = defineProps({
    img: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  });
  function alt(el) {
    return el.split('/').pop().split('.').shift();
  }
</script>

<template>
  <div :class="$style.card">
    <img :class="$style.img" :src="props.img" :alt="alt(props.img)" />
    <div :class="$style.info">
      <p :class="$style.name">{{ props.name }}</p>
      <p :class="$style.post">{{ props.post }}</p>
    </div>
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';

  .card {
    display: flex;
    flex-flow: row nowrap;
    padding: 1rem;
    border-radius: 6px;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    background-color: #fff;
    margin-bottom: 1rem;
    background: linear-gradient(197deg, #f1f4ff 20%, #b0d4ff42 100%),
      linear-gradient(
        140deg,
        rgba(255, 255, 255, 0.168627451) 35%,
        #afc6ff61 100%
      );

    @media (min-width: $tablet-size-port) {
      padding: 2rem;
      margin-bottom: 2rem;
    }
  }
  .img {
    display: block;
    flex: 1 1 86px;
    width: 86px;
    height: 86px;
    border-radius: 6px;
    overflow: hidden;
    object-fit: cover;
    margin-right: 1rem;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    margin-bottom: 0;

    @media (min-width: $tablet-size-port) {
      flex: 0 0 140px;
      width: 140px;
      height: 140px;
      margin-right: 2rem;
    }
  }

  .info {
    flex: calc(100% - 86px - 1rem);

    @media (min-width: $tablet-size-port) {
      flex: 0 0 calc(100% - 140px - 2rem);
    }
  }

  .post {
    font-size: 0.8rem;
    color: #808185;
    @media (min-width: $tablet-size-port) {
      font-size: 1rem;
    }
  }

  .name {
    font-size: 0.9rem;
    color: #2e3036;
    margin-bottom: 0.5rem;
    @media (min-width: $tablet-size-port) {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }
</style>
