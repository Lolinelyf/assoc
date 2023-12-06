<script setup>
  import BreadcrumbsViewsVue from '@/views/BreadcrumbsViews.vue';
  import BannerSmall from '@/components/BannerSmall.vue';
  import { getBannerItems } from '@/api/CareerBannerSmall.js';
</script>
<template>
  <BreadcrumbsViewsVue :path="['Центр карьеры']" />
  <div class="container">
    <h2 class="title">Центр карьеры</h2>

    <section :class="$style.job">
      <div :class="$style.container">
        <div :class="$style.list">
          <h3 :class="$style.list__title">
            Центр развития карьеры помогает найти:
          </h3>
          <ul>
            <li>Вакансии от ведущих компаний</li>
            <li>Выпускников, готовых стать вашими сотрудниками</li>
            <li>
              Возможность подбора кандидатов на узкопрофильные специальности
            </li>
            <li>Новые возможности для повышения вашей квалификации</li>
            <li>
              Единомышленников для уже существующего или нового проекта, бизнеса
            </li>
          </ul>
        </div>

        <h2 :class="$style.title" class="title">Подать заявку на:</h2>
        <div :class="$style.flex">
          <BannerSmall
            :class="$style.item"
            v-for="item in getBannerItems()"
            :title="item.title"
            :action="item.action"
            :img="item.img"
            :link="item.link"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .job {
    margin-bottom: 2rem;
    @media (min-width: $tablet-size-port) {
      margin-bottom: 4rem;
    }
  }

  .container {
    padding: 1rem;
    border-radius: 6px;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    background-color: #fff;

    @media (min-width: $tablet-size-port) {
      padding: 2rem;
    }
  }

  .list {
    width: 100%;
    margin-bottom: 1rem;
    @media (min-width: $tablet-size-port) {
      margin-bottom: 2rem;
    }

    &__title {
      font-size: 1rem;
      color: #2e3036;
      font-weight: 700;
      margin-bottom: 1rem;
      @media (min-width: $tablet-size-port) {
        font-size: 1.4rem;
      }
    }
  }

  .button {
    display: block;
    color: #669cff;
    font-weight: 600;
    width: max-content;

    @media (min-width: $tablet-size-land) {
      transition: ease 0.25s;
      &:hover {
        color: #2a3447;
      }
    }
  }

  .title {
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: none;
    color: $blue-color;
    @media (min-width: $tablet-size-port) {
      font-size: 1.6rem;
    }
  }

  .flex {
    display: flex;
    flex-flow: column wrap;

    @media (min-width: $tablet-size-port) {
      flex-flow: row nowrap;
    }
  }

  .item {
    flex: 0 0 calc((100% - 2rem) / 2);
  }
</style>
