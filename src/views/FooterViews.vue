<template>
  <footer :class="$style.footer">
    <section :class="$style.contacts">
      <div :class="$style.navigation">
        <p :class="$style.navigation__title">Ассоциация выпускников СКФУ</p>
        <ul :class="$style.navigation__list">
          <li :class="$style.navigation__link">
            <RouterLink to="/about">О нас</RouterLink>
          </li>
          <li :class="$style.navigation__link">
            <RouterLink to="/projects">Проекты</RouterLink>
          </li>
          <li :class="$style.navigation__link">
            <RouterLink to="/career">Центр карьеры</RouterLink>
          </li>
          <li :class="$style.navigation__link">
            <RouterLink to="/graduates">Выпускникам</RouterLink>
          </li>
          <li :class="$style.navigation__link">
            <RouterLink to="/partners">Партнёры</RouterLink>
          </li>
          <li :class="$style.navigation__link">
            <RouterLink to="/contacts">Контакты</RouterLink>
          </li>
        </ul>
      </div>

      <div :class="$style.contacts__container">
        <h2 :class="$style.contacts__title" class="title">Контакты</h2>
        <p :class="$style.contacts__item">
          Адрес: 355009, г. Ставрополь, ул. Пушкина, 1
        </p>
        <p :class="$style.contacts__item">
          Телефон/факс: <a href="tel:+78652956800">+7 (8652) 95-68-00</a>, доб.
          1542
        </p>
        <p :class="$style.contacts__item">
          Эл.почта: <a href="mailto:hr@ncfu.ru">hr@ncfu.ru</a>
        </p>
      </div>

      <div :class="$style.contacts__container">
        <h2 :class="$style.contacts__title" class="title">
          Другие сайты университета
        </h2>
        <p :class="$style.contacts__item">
          <a href="https://www.ncfu.ru/glavnaya/">Веб-портал СКФУ</a>
        </p>
        <p :class="$style.contacts__item">
          <a href="https://ecampus.ncfu.ru/">еКампус</a>
        </p>
        <p :class="$style.contacts__item">
          <a href="https://school.ncfu.ru/"
            >Сайт для школьников и их родителей</a
          >
        </p>
      </div>
    </section>
  </footer>
</template>

<style module lang="scss">
  @import '@/assets/scss/base/variables.scss';
  .footer {
    width: 100%;
    background-color: #171c2d;
    padding: 0.75rem;
    color: #d1d1d3;
    @media (min-width: $mobile-size-land) {
      padding: 2rem;
    }
  }
  .contacts {
    display: flex;
    flex-flow: column wrap;

    @media (min-width: $tablet-size-land) {
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      max-width: 1600px;
      margin: auto;
    }

    &__container {
      margin-bottom: 2rem;

      @media (min-width: $tablet-size-land) {
        margin-left: 2rem;
      }

      @media (min-width: $desktop-size-average) {
        margin: 0;
      }
    }

    &__title {
      color: #fff;
      margin-bottom: 1rem;
      font-size: 1.2rem;

      @media (min-width: $mobile-size-land) {
        font-size: 1.4rem;
      }

      @media (min-width: $tablet-size-port) {
        font-size: 1.6rem;
      }
    }

    &__item {
      color: #d1d1d3;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 400;
      @media (min-width: $mobile-size-land) {
        font-size: 1rem;
      }

      & > a {
        display: inline-block;
        color: #fff;
        font-weight: 400;
        font-size: 0.9rem;

        @media (min-width: $tablet-size-land) {
          font-size: 1rem;
          transition: 0.25s;
          width: max-content;

          &:hover {
            color: #669cff;
            transform: translateY(-2px);
          }
        }
      }
    }
  }
  .navigation {
    background: linear-gradient(
        215deg,
        rgba(255, 255, 255, 0) 90%,
        rgb(184, 208, 255) 100%
      ),
      linear-gradient(200deg, rgb(240, 245, 255) 35%, rgb(183, 206, 255) 100%);
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #07205212,
      0 1px 10px #64798a14;
    padding: 1rem;
    border-radius: 20px;
    margin-bottom: 2rem;
    max-width: 550px;
    @media (min-width: $mobile-size-land) {
      padding: 2rem;
    }

    @media (min-width: $desktop-size-average) {
      margin: 0;
      max-width: 100%;
    }

    &__title {
      color: #2e3036;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      @media (min-width: $mobile-size-land) {
        font-size: 1.4rem;
      }
    }

    &__list {
      margin: 0;
      padding: 0;
    }

    &__link {
      margin: 0;
      list-style: none;
      padding: 0;
      color: #2e3036;
      font-size: 1rem;
      font-weight: 500;

      &:not(:last-child) {
        padding-bottom: 0.25rem;
      }

      & > a {
        display: block;
        color: #2e3036;
        font-size: 0.9rem;

        @media (min-width: $tablet-size-land) {
          transition: 0.25s;
          font-size: 1rem;
          &:hover {
            color: #669cff;
            transform: translateX(-4px);
          }
        }
      }
    }
  }
</style>
