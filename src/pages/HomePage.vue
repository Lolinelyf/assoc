<script setup>
  import BannerMain from '@/components/BannerMain.vue';
  import { getBannerItems } from '@/api/BannerMain.js';
</script>
<template>
  <div class="container">
    <section :class="$style.citation">
      <div :class="$style.item">
        <img src="/images/nophoto.png" alt="" :class="$style.img" />
        <div :class="$style.text">
          <p>
            Выпускники – это гордость любого вуза, и СКФУ есть кем гордиться.
            Ведь наши выпускники прославляют университет во всех уголках мира.
          </p>
          <p>
            Ассоциация выпускников СКФУ выступает платформой для плодотворного
            общения и сотрудничества университета с теми, кто получил
            образование в стенах вуза и начал успешный путь в карьере с дипломом
            СКФУ.
          </p>
          <p>
            Присоединяйтесь к Ассоциации выпускников Северо-Кавказского
            федерального университета и нашим проектам. Вместе мы сможем
            сохранить и укрепить связи с alma mater, сделать больше во имя
            процветания университета, его сегодняшних и будущих выпускников!
          </p>
          <p><b>Ректор СКФУ Д.Н. Беспалов</b></p>
        </div>
      </div>
    </section>
  </div>
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
  .citation {
    width: 100%;
    margin-bottom: 2rem;
    @media (min-width: $tablet-size-port) {
      margin-bottom: 4rem;
    }
  }

  .item {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    @media (min-width: $tablet-size-port) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row nowrap;
    }
  }

  .text {
    position: relative;
    flex: 0 0 calc(100% - 2rem - 235px);

    margin-bottom: 1rem;
    color: #000;

    @media (min-width: $tablet-size-port) {
      margin-bottom: 0;
    }
    @media (min-width: $tablet-size-land) {
      flex: 0 0 calc(100% - 2rem - 275px);
    }
    @media (min-width: $tablet-size-port) {
      margin-left: 2rem;
    }

    &::before {
      @media (min-width: $desktop-size-average) {
        content: url('/images/icons/marks.svg');
        display: block;
        position: absolute;
        right: -4rem;
        top: 0;
      }
    }
  }

  .img {
    display: block;
    float: left;
    width: 84px;
    margin: 0 1rem 0 0;
    border-radius: 8px;
    object-fit: contain;

    @media (min-width: $tablet-size-land) {
      flex: 0 0 275px;
      width: 275px;
      box-shadow:
        0 2px 4px #64798a0a,
        0 4px 5px #64798a0a,
        0 1px 10px #64798a14;
    }
  }
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
