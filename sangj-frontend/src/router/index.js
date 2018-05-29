import Vue from 'vue';
import Router from 'vue-router';
import { store } from '../store/store';

Vue.use(Router);

// 클라이언트 레이아웃
import Layout from '../views/layout/client/Layout'
// 어드민 레이아웃
import AdminLayout from '../views/layout/admin/Layout'

const requireAuth = () => (to, form, next) => {
  if (store.getters.isAuthenticated) return next();
  next('/login')
}

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
      path: '/login',
      name: 'AdminLogin',
      component: () => import('@/views/login')
    },
    {
      path: '/admin',
      name: 'AdminMain',
      component: AdminLayout,
      beforeEnter: requireAuth(),
      children: [
        { path: 'list', component: () => import('@/views/admin-list'), name: 'admin-list' },
        { path: 'post', component: () => import('@/views/admin-post'), name: 'admin-post' },
        { path: 'write', component: () => import('@/views/admin-write'), name: 'admin-write' }
      ]
    },
  ],
  mode: 'history',
});
