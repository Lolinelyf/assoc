<script setup>
  import BreadcrumbsViewsVue from '@/views/BreadcrumbsViews.vue';
  import ContactCard from '@/components/ContactCard.vue';
  import ContactBanner from '@/components/ContactBanner.vue';
  import ContactMap from '@/components/ContactMap.vue';
  import { getCardsItem } from '@/api/CardsContact.js';
</script>
<template>
  <BreadcrumbsViewsVue :path="['Контакты']" />
  <div class="container">
    <h2 class="title">Контакты</h2>

    <div :class="$style.flex">
      <ContactCard
        v-for="item in getCardsItem()"
        :key="item.id"
        :name="item.name"
        :position="item.position"
        :image="item.image"
        :phones="item.phones"
        :address="item.address"
        :mail="item.mail"
      />
    </div>
    <ContactBanner :class="$style.banner" />

    <h2 class="title">Карта</h2>

    <ContactMap />
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .flex {
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 0;

    @media (min-width: $tablet-size-land) {
      flex-flow: row nowrap;
      margin-bottom: 2rem;
    }
  }
  .banner {
    margin-bottom: 2rem;
    @media (min-width: $tablet-size-land) {
      flex-flow: row nowrap;
      margin-bottom: 4rem;
    }
  }
</style>
