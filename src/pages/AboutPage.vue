<script setup>
  import BreadcrumbsViewsVue from '@/views/BreadcrumbsViews.vue';
  import ManagementCard from '@/components/ManagementCard.vue';
  import { getManagementItems } from '@/api/ManagementCard.js';
  import { getBannerItems } from '@/api/AboutBannerSmall.js';
  import BannerSmall from '@/components/BannerSmall.vue';
</script>
<template>
  <BreadcrumbsViewsVue :path="['Об Ассоциации выпускников']" />
  <div class="container">
    <h2 class="title">Об Ассоциации выпускников</h2>
    <section :class="$style.history">
      <div :class="$style.info">
        <div :class="$style.text">
          <p>
            Мы рады приветствовать Вас в Ассоциации выпускников
            Северо-Кавказского федерального университета!
          </p>
          <p>
            Для вступления в Ассоциацию выпускников Вы можете заполнить заявку
            на нашей главной странице нажав «Стать участником».
          </p>
        </div>
        <h3 :class="$style.title">Деятельность Ассоциации выпускников</h3>
        <ul>
          <li>
            Объединение выпускников университетов, вошедших в состав СКФУ,
            разных поколений, развитие и укрепление между ними контактов;
          </li>
          <li>
            Создание благоприятных условий для взаимопомощи и сотрудничества
            всех выпускников вуза;
          </li>
          <li>
            Содействие сохранению и развитию лучших традиций университета;
          </li>
          <li>
            Достижение социальных, благотворительных, культурных,
            образовательных, научных и управленческих целей;
          </li>
          <li>
            Повышение общественной значимости и признания СКФУ в России и за
            рубежом, установление и поддержка контактов с аналогичными
            организациями
          </li>
        </ul>
        <h3 :class="$style.title">
          Какие возможности дает членство в Ассоциации?
        </h3>
        <ul>
          <li>
            получать актуальную информацию о мероприятиях университета и
            Ассоциации выпускников СКФУ;
          </li>
          <li>
            участвовать во всех мероприятиях Ассоциации (встречи выпускников,
            мастер-классы, встречи с популярными личностями, спикерами и т.д.);
          </li>
          <li>пользоваться библиотечным и научным фондами университета;</li>
          <li>
            публиковать научные статьи в журналах и сборниках, издаваемых
            университетом;
          </li>
          <li>
            проводить собственные мероприятия (презентации, круглые столы,
            конференции) на площадках университета на особых условиях.
          </li>
        </ul>
      </div>
    </section>
  </div>
  <section :class="$style.management">
    <div class="container">
      <h2 class="title">Правление Ассоциации</h2>
      <div :class="$style.flex">
        <ManagementCard
          :class="$style.card"
          v-for="item in getManagementItems()"
          :key="item.id"
          :img="item.img"
          :post="item.post"
          :name="item.name"
        />
      </div>
      <div :class="$style.page">
        <a href="#">Совет Ассоциации</a>
      </div>
    </div>
  </section>
  <div class="container">
    <section :class="$style.banners">
      <div :class="$style.banners__flex">
        <BannerSmall
          :class="$style.item"
          v-for="item in getBannerItems()"
          :title="item.title"
          :action="item.action"
          :img="item.img"
          :link="item.link"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .history {
    width: 100%;
    margin-bottom: 2rem;
    @media (min-width: $tablet-size-port) {
      margin-bottom: 4rem;
    }
  }
  .info {
    font-size: 1rem;
    font-size: 1rem;
    & > ul {
      font-weight: 500;
      font-size: 0.9rem;
      color: #2e3036;
      list-style: disc;
      margin-bottom: 1rem;
      @media (min-width: $tablet-size-port) {
        font-size: 1rem;
      }
      padding-inline-start: 1rem;
      & > li {
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  .text {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    @media (min-width: $tablet-size-port) {
      font-size: 1rem;
    }

    & > p {
      margin-bottom: 0.5rem;
    }
  }

  .title {
    font-size: 1rem;
    color: #2e3036;
    font-weight: 700;
    margin-bottom: 1rem;
    @media (min-width: $tablet-size-port) {
      font-size: 1.4rem;
    }
  }

  .management {
    background-color: #fcfcfc;
    padding: 2rem 0;

    @media (min-width: $tablet-size-port) {
      padding: 4rem 0;
    }
  }
  .flex {
    display: flex;
    flex-flow: column wrap;

    @media (min-width: $tablet-size-land) {
      flex-flow: row nowrap;
    }
  }

  .card {
    flex: 0 0 100%;
    @media (min-width: $tablet-size-land) {
      flex: 0 0 calc((100% - 2rem) / 2);
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }

  .page {
    display: flex;
    justify-content: flex-end;

    & > a {
      color: #2e3036;
      opacity: 0.6;
      font-size: 0.9rem;

      @media (min-width: $tablet-size-land) {
        transition: 0.15s;
        font-size: 1rem;

        &:hover {
          color: #669cff;
          opacity: 1;
        }
      }
    }
  }

  .banners {
    margin: 2rem 0 1rem 0;
    @media (min-width: $tablet-size-port) {
      margin: 4rem 0 2rem 0;
    }
    &__flex {
      display: flex;
      flex-flow: column wrap;

      @media (min-width: $tablet-size-port) {
        flex-flow: row nowrap;
      }
    }
  }

  .item {
    flex: 0 0 calc((100% - 2rem) / 2);
  }
</style>
