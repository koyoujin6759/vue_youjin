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
      path: '/menu1',
      component: () => import('../pages/menu1.vue'),
    },
    {
      path: '/menu2',
      component: () => import('../pages/menu2.vue'),
    },
    {
      path: '/menu3',
      component: () => import('../pages/menu3.vue'),
    }
  ],
});
