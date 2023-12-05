<template>
  <section :class="$style.banner">
    <div :class="$style.flex">
      <h2 :class="$style.title" class="title">Социальные сети</h2>
      <div :class="$style.container">
        <a href="https://t.me/WorkNCFU" :class="$style.link"
          ><img src="/images/icons/tg-c.png" alt="tg" :class="$style.img"
        /></a>
        <a href="https://vk.com/careercentr_ncfu" :class="$style.link"
          ><img src="/images/icons/vk-c.png" alt="vk" :class="$style.img"
        /></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .banner {
    width: 100%;
  }
  .flex {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    border-radius: 6px;
    padding: 1rem;
    height: 200px;
    background:
      linear-gradient(0deg, #00000021 10%, #ffffff00, #ffffff00 35% 100%),
      top 4rem right -1rem/11rem no-repeat url('/images/icons/background-logo.svg'),
      linear-gradient(135deg, #0000004d 10%, #ffffff00 90%),
      linear-gradient(0deg, #083266, #003dae);
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;

    @media (min-width: $tablet-size-port) {
      padding: 2rem;
      height: 270px;
      background:
        linear-gradient(0deg, #00000021 10%, #ffffff00, #ffffff00 35% 100%),
        top 2rem right 2rem/19rem no-repeat
          url('/images/icons/background-logo.svg'),
        linear-gradient(135deg, #0000004d 10%, #ffffff00 90%),
        linear-gradient(0deg, #083266, #003dae);
    }
  }

  .title {
    color: #fff;
    font-size: 1.4rem;

    @media (min-width: $tablet-size-port) {
      font-size: 1.8rem;
    }

    @media (min-width: $tablet-size-land) {
      font-size: 2.2rem;
    }
  }

  .container {
    display: flex;
    flex-flow: row nowrap;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    @media (min-width: $tablet-size-port) {
      transition: 0.25s;
      height: 40px;

      &:hover {
        filter: contrast(70%);
      }
    }
  }

  .img {
    display: block;
    height: 100%;
    object-fit: contain;
    filter: grayscale(100%) contrast(200%);
  }
</style>
