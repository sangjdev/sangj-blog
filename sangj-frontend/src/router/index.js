import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 클라이언트 레이아웃
import Layout from '../views/layout/client/Layout'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Layout,
      children: [
        { path: 'home', component: () => import('@/views/dashboard'), name: 'home' },
        { path: 'documentation', component: () => import('@/views/category'), name: 'documentation' },
        { path: 'post', component: () => import('@/views/post'), name: 'post' }
      ]
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: () => import('@/views/login')
    },
    {
      path: '/admin/main',
      name: 'AdminMain',
      component: () => import('@/views/layout/admin/Layout')
    },
  ],
  mode: 'history',
});
