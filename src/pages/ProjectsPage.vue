<script setup>
  import BreadcrumbsViewsVue from '@/views/BreadcrumbsViews.vue';
  import ProjectCard from '@/components/ProjectCard.vue';
  import { getProjectItems } from '@/api/ProjectCard.js';
</script>
<template>
  <BreadcrumbsViewsVue :path="['Проекты']" />
  <div class="container">
    <h2 class="title">Проекты</h2>
    <section :class="$style.projects">
      <div :class="$style.flex">
        <ProjectCard
          :class="$style.item"
          v-for="item in getProjectItems()"
          :key="item.id"
          :href="item.href"
          :title="item.title"
          :img="item.img"
        />
      </div>
    </section>
  </div>
</template>
<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .projects {
    margin-bottom: 0;
    @media (min-width: $tablet-size-port) {
      margin-bottom: 4rem;
    }
  }
  .flex {
    display: flex;
    flex-flow: row wrap;
  }

  .item {
    flex: 0 0 100%;
    margin-bottom: 2rem;

    @media (min-width: $tablet-size-port) {
      flex: 0 0 calc((100% - 2rem) / 2);

      &:not(:nth-child(2n)) {
        margin-right: 2rem;
      }
    }

    @media (min-width: $tablet-size-land) {
      flex: 0 0 calc((100% - 4rem) / 3);

      &:not(:nth-child(2n)) {
        margin-right: 0;
      }

      &:not(:nth-child(3n)) {
        margin-right: 2rem;
      }
    }
  }
</style>
