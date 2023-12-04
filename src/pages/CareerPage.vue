<script setup>
  import BreadcrumbsViewsVue from '@/views/BreadcrumbsViews.vue';
  import BannerSmall from '@/components/BannerSmall.vue';
</script>
<template>
  <BreadcrumbsViewsVue :path="['Центр карьеры']" />
  <div class="container">
    <h2 class="title">Центр карьеры</h2>

    <section :class="$style.job">
      <div :class="$style.container">
        <div :class="$style.list">
          <ul>
            <li>
              Центр развития карьеры помогает найти:
              <ul>
                <li>Вакансии от ведущих компаний</li>
                <li>Выпускников, готовых стать вашими сотрудниками</li>
                <li>
                  Возможность подбора кандидатов на узкопрофильные специальности
                </li>
                <li>Новые возможности для повышения вашей квалификации</li>
                <li>
                  Единомышленников для уже существующего или нового проекта,
                  бизнеса
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 :class="$style.title" class="title">Подать заявку на:</h2>
        <div :class="$style.flex">
          <BannerSmall
            :class="$style.item"
            title="Поиск работы"
            action="Подать"
            img="src/assets/icons/career.png"
            link="https://forms.yandex.ru/u/6512815ec09c025f6a7b3430/"
          />
          <BannerSmall
            :class="$style.item"
            title="Поиск сотрудника"
            action="Подать"
            img="src/assets/icons/career.png"
            link="https://forms.yandex.ru/u/65128018eb61464fd1f00773/"
          />
        </div>
        <div :class="$style.links">
          <a href="https://vk.com/careercentr_ncfu" :class="$style.link"
            ><img src="@/assets/icons/vk-c.png" alt="" :class="$style.img"
          /></a>
          <a href="https://t.me/WorkNCFU" :class="$style.link"
            ><img src="@/assets/icons/tg-c.png" alt="" :class="$style.img"
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .job {
    font-size: 1.2rem;
    margin-bottom: 4rem;
  }
  .container {
    padding: 2rem;
    border-radius: 6px;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    background-color: #fff;
  }

  .list {
    width: 100%;
    margin-bottom: 2rem;
    & > ul {
      margin: 0;
      padding: 0;
      list-style: none;

      & > li {
        margin: 0;
        padding-left: 0;
        list-style: none;
        font-weight: 600;
        font-size: 1.6rem;
        color: $blue-color;
        &:not(:last-child) {
          margin-bottom: 2rem;
        }

        & > ul {
          margin-top: 1.6rem;
          font-weight: 500;
          font-size: 1.2rem;
          color: #2e3036;
          padding-inline-start: 2rem;

          & > li {
            &::marker {
              content: '~  ';
              color: #2e3036;
            }
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }

  .links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    @media (min-width: $tablet-size-port) {
      justify-content: flex-end;
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

  .link {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 30px;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    @media (min-width: $tablet-size-port) {
      margin-top: 0;
      transition: 0.25s;
      height: 40px;

      &:hover {
        filter: contrast(135%);
      }
    }
  }

  .img {
    display: block;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 2px #314b833a);
  }

  .title {
    font-weight: 600;
    font-size: 1.6rem;
    text-transform: none;
    color: $blue-color;
  }

  .flex {
    display: flex;
    flex-flow: column wrap;
    margin-top: 2rem;

    @media (min-width: $tablet-size-port) {
      flex-flow: row nowrap;
    }
  }

  .item {
    flex: 0 0 calc((100% - 2rem) / 2);
  }
</style>
