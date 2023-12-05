<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';

  const isActive = ref(false);

  function toggleNav() {
    isActive.value = !isActive.value;
  }
</script>

<template>
  <div :class="$style.navigation">
    <div :class="$style.bar">
      <a href="/" :class="$style.logo">
        <img src="/images/icons/logo.svg" :class="$style.img" alt="" />
      </a>
      <button
        :class="{ [$style.button]: true, [$style.active]: isActive }"
        @click="toggleNav"
      ></button>
    </div>

    <nav
      :class="{ [$style.menu]: true, [$style.active]: isActive }"
      @click="toggleNav"
    >
      <div :class="$style.container" class="container">
        <ul :class="$style.list">
          <li>
            <RouterLink :class="$style.item" to="/about">О нас</RouterLink>
          </li>
          <li>
            <RouterLink :class="$style.item" to="/projects">Проекты</RouterLink>
          </li>
          <li>
            <RouterLink :class="$style.item" to="/career"
              >Центр карьеры</RouterLink
            >
          </li>
          <li>
            <RouterLink :class="$style.item" to="/graduates"
              >Выпускникам</RouterLink
            >
          </li>
          <li>
            <RouterLink :class="$style.item" to="/partners"
              >Партнёры</RouterLink
            >
          </li>
          <li>
            <RouterLink :class="$style.item" to="/contacts"
              >Контакты</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style module lang="scss">
  @import '@/assets/scss/base/variables.scss';
  .navigation {
    background-color: #fff;
  }
  .bar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 3px 6px #0000000f;
    padding: 10px 0.75rem;
    z-index: 999;
    @media (min-width: $mobile-size-land) {
      padding: 10px 16px;
    }

    @media (min-width: $tablet-size-port) {
      display: none;
      background-color: rgba(255, 255, 255, 0);
    }
  }

  .img {
    height: 100%;
    object-fit: contain;
  }

  .button {
    position: relative;
    width: 25px;
    height: 27px;
    margin-top: 2px;
    background: linear-gradient(#fff 0 12px, #082666 12px 14px, #fff 14px 35px);

    &::after,
    &::before {
      content: '';
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: $blue-color;
      transition: 0.25s;
    }

    &::after {
      top: 4px;
    }

    &::before {
      bottom: 5px;
    }

    &.active {
      background: none;

      &::after {
        transform: rotate(45deg);
        top: 12px;
      }

      &::before {
        transform: rotate(-45deg);
        bottom: 13px;
      }
    }
  }

  .menu {
    transform: translateX(-100vw);
    position: fixed;
    top: 50px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: #fff;
    transition: 0.25s;
    z-index: 99;
    box-shadow: 0px 3px 10px #0000000a;
    font-size: 0.8em;

    @media (min-width: $tablet-size-port) {
      box-shadow:
        0 2px 4px #64798a0a,
        0 4px 5px #64798a0a,
        0 1px 10px #64798a14;
      position: relative;
      display: block;
      transform: translateX(0);
      background-color: rgba(255, 255, 255, 0);
      top: 0;
      width: 100%;
      font-size: 1em;
      height: 60px;
      font-weight: 500;
      z-index: 0;
    }

    @media (min-width: $tablet-size-land) {
      font-size: 1.2em;
    }

    &.active {
      transform: translateX(0);
    }
  }

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 15px 0;
    margin: 0;

    @media (min-width: $tablet-size-port) {
      height: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: $blue-color;
      padding: 0;
    }

    & > li {
      list-style-type: none;
      width: 100%;

      @media (min-width: $tablet-size-port) {
        width: auto;
      }
    }

    & > li > ul {
      padding-left: 0;
    }
  }

  .item {
    display: inline-block;
    color: #2e3036;
    font-size: 1.4em;
    padding-bottom: 6px;
    width: 100%;

    @media (min-width: $tablet-size-port) {
      transition: 0.15s;
      width: auto;
      font-size: 1em;
      padding-bottom: 0;

      &:hover {
        transform: translateY(-2px);
        color: #669cff;
      }
    }
  }
</style>
