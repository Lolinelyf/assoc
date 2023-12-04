import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import CareerPage from '@/pages/CareerPage.vue';
import ContactsPage from '@/pages/ContactsPage.vue';
import GraduatesPage from '@/pages/GraduatesPage.vue';
import PartnersPage from '@/pages/PartnersPage.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      // name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      // name: 'about',
      component: AboutPage,
    },
    {
      path: '/career',
      // name: 'career',
      component: CareerPage,
    },
    {
      path: '/contacts',
      // name: 'contacts',
      component: ContactsPage,
    },
    {
      path: '/graduates',
      // name: 'graduates',
      component: GraduatesPage,
    },
    {
      path: '/partners',
      // name: 'partners',
      component: PartnersPage,
    },
    {
      path: '/projects',
      // name: 'projects',
      component: ProjectsPage,
    },
  ],
});
