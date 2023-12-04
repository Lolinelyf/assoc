<script setup>
  const props = defineProps({
    path: {
      type: Array,
      required: true,
    },
  });
</script>
<template>
  <div class="container">
    <ul :class="$style.breadcrumbs">
      <li :class="$style.item">
        <a href="/" :class="$style.link">Главная</a>
      </li>
      <li :class="$style.item" v-for="item in path">{{ item }}</li>
    </ul>
  </div>
</template>

<style module lang="scss">
  @import '@/assets/scss/base/variables.scss';
  .breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.6rem !important;
    margin-bottom: 1.6rem !important;
    padding: 0;
  }
  .link {
    font-size: 0.8rem;
    text-decoration: none;
    color: #2e3036;
  }

  .item {
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #2e3036;

    &::after {
      display: block;
      content: '›';
      margin-left: 0.5rem;
      color: #2e3036;
    }

    &:last-child::after {
      display: none;
    }

    & > a {
      color: #2e3036;

      @media (min-width: $tablet-size-land) {
        transition: 0.25s;
        &:hover {
          color: #669cff;
        }
      }
    }
  }

  .item:not(:last-child) .link {
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
</style>
