import Vue from 'vue';
import Router from 'vue-router';
import AppContent from '@/components/AppContent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppContent',
      component: AppContent,
      // component: () => import('../components/AppContent.vue'),
    },
    {
      path: '/about',
      component: () => import('../pages/about.vue'),
    },
    {
      path: '/contact',
      component: () => import('../pages/contact.vue'),
    }
  ],
});
