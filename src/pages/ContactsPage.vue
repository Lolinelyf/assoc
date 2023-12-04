<script setup>
  import BreadcrumbsViewsVue from '@/views/BreadcrumbsViews.vue';
  import ContactCard from '@/components/ContactCard.vue';
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
      ></ContactCard>
    </div>
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .flex {
    display: flex;
    flex-flow: column wrap;

    @media (min-width: $tablet-size-land) {
      flex-flow: row nowrap;
    }
  }
</style>
