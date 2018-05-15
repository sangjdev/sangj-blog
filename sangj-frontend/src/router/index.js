import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: () => import('@/views/documentation')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/MainArticle')
        }
      ]
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/Post')
    },
  ],
  mode: 'history',
});
