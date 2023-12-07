<template>
  <section :class="$style.social">
    <div :class="$style.flex">
      <a href="" :class="$style.item">
        <img src="/images/icons/rocket.png" alt="" :class="$style.img" />
        <p>Проекты</p>
      </a>
      <a href="" :class="$style.item">
        <img src="/images/icons/graduate.png" alt="" :class="$style.img" />
        <p>Выпускники</p>
      </a>
      <a href="https://vk.com/careercentr_ncfu" :class="$style.item">
        <img src="/images/icons/vk.png" alt="" :class="$style.img" />
        <p>Вконтакте</p>
      </a>
      <a href="https://t.me/WorkNCFU" :class="$style.item">
        <img src="/images/icons/telega.png" alt="" :class="$style.img" />
        <p>Telegram</p>
      </a>
    </div>
  </section>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .social {
    width: 100%;
  }

  .flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    border-bottom: 3px solid #082666;
    padding-bottom: 1rem;

    @media (min-width: $tablet-size-port) {
      flex-flow: row nowrap;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 calc((100% - 2rem) / 2);
    margin-bottom: 2rem;
    padding: 1rem;
    background: linear-gradient(
        215deg,
        rgba(255, 255, 255, 0) 90%,
        rgb(184, 208, 255) 100%
      ),
      linear-gradient(200deg, rgb(240, 245, 255) 35%, rgb(183, 206, 255) 100%);
    border-radius: 8px;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    &:not(:nth-child(2n)) {
      margin-right: 2rem;
    }

    @media (min-width: $mobile-size-land) {
      padding: 2rem;
    }

    @media (min-width: $tablet-size-port) {
      flex: 0 0 calc((100% - 12rem) / 4);
      margin-bottom: 2rem;
      &:not(:last-child) {
        margin-right: 2rem;
      }

      &:hover .links__img {
        transform: scale(0.9);
      }

      &:hover {
        box-shadow: $shadow-medium-hovered;
      }
    }

    & > p {
      font-size: 1rem;
      color: $blue-color;
      margin: 0;

      @media (min-width: $tablet-size-land) {
        font-size: 1.6rem;
      }
    }
  }

  .img {
    width: 52px;
    height: 52px;
    object-fit: contain;
    background: none;
    margin-bottom: 1rem;
    @media (min-width: $mobile-size-land) {
      width: 72px;
      height: 72px;
      margin-bottom: 2rem;
    }
    @media (min-width: $tablet-size-land) {
      width: 92px;
      height: 92px;
    }

    transition:
      box-shadow 0.25s,
      transform 0.25s;
  }
</style>
