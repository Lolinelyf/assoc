<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';

  import 'swiper/css/navigation';

  import { Autoplay, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Navigation],
      };
    },
  };
</script>
<template>
  <section class="hero">
    <div class="hero__slider">
      <swiper
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><img class="hero__img" src="/images/swiper-3.jpg" alt="" />
          <div class="container hero__flex">
            <h2 class="title hero__title pt-4">
              Ректор СКФУ: образование – ключ к развитию нашей страны
            </h2>
            <a href="form.html" class="button button--white mt-4 mb-2"
              >Подать заявку</a
            >
          </div></swiper-slide
        >
        <swiper-slide
          ><img class="hero__img" src="/images/swiper-2.jpg" alt="" />
          <div class="container hero__flex">
            <h2 class="title hero__title pt-4">
              «Сохраняем историческую память»: сотрудник СКФУ – участник
              Международной школы для молодых историков
            </h2>
            <a href="form.html" class="button button--white mt-4 mb-2"
              >Подать заявку</a
            >
          </div></swiper-slide
        ><swiper-slide
          ><img class="hero__img" src="/images/swiper.jpg" alt="" />
          <div class="container hero__flex">
            <h2 class="title hero__title pt-4">
              Студенческое лето СКФУ закончилось, а эмоции остались
            </h2>
            <a href="form.html" class="button button--white mt-4 mb-2"
              >Подать заявку</a
            >
          </div></swiper-slide
        >
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
  @import '@/assets/scss/base/variables.scss';
  .hero {
    position: relative;
    width: 100%;
    height: 250px;
    margin-bottom: 2rem;

    @media (min-width: $mobile-size-land) {
      height: 400px;
    }

    @media (min-width: $tablet-size-land) {
      height: 790px;
      margin-bottom: 4rem;
    }

    &__slider {
      width: 100%;
      height: 100%;
    }
    .swiper {
      height: 100%;
      width: 100%;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-container {
      width: 100%;
      height: 100%;
    }

    &__flex {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      padding: 3rem 3rem;

      @media (min-width: $tablet-size-land) {
        justify-content: flex-start;
        padding: 0;
      }

      @media (min-width: $desktop-size-large) {
        justify-content: center;
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
      z-index: -1;
      filter: brightness(0.6);
    }

    &__title {
      color: #fff;
      margin-bottom: 0;
      font-size: 0.9rem;

      @media (min-width: $tablet-size-port) {
        font-size: 1.8rem;
        margin-bottom: 4rem;
      }

      @media (min-width: $tablet-size-land) {
        font-size: 2.2rem;
      }
    }
  }
</style>
