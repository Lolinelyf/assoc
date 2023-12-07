<script setup></script>
<template>
  <section :class="$style.citation">
    <div :class="$style.item">
      <img src="/images/nophoto.png" alt="" :class="$style.img" />
      <div :class="$style.text">
        <p>
          Выпускники – это гордость любого вуза, и СКФУ есть кем гордиться. Ведь
          наши выпускники прославляют университет во всех уголках мира.
        </p>
        <p>
          Ассоциация выпускников СКФУ выступает платформой для плодотворного
          общения и сотрудничества университета с теми, кто получил образование
          в стенах вуза и начал успешный путь в карьере с дипломом СКФУ.
        </p>
        <p>
          Присоединяйтесь к Ассоциации выпускников Северо-Кавказского
          федерального университета и нашим проектам. Вместе мы сможем сохранить
          и укрепить связи с alma mater, сделать больше во имя процветания
          университета, его сегодняшних и будущих выпускников!
        </p>
        <p><b>Ректор СКФУ Д.Н. Беспалов</b></p>
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
</style>
