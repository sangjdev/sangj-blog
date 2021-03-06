import Vue from 'vue';
import Router from 'vue-router';
import { store } from '../store/store';

Vue.use(Router);

// 클라이언트 레이아웃
import Layout from '../views/layout/client/Layout'
// 어드민 레이아웃
import AdminLayout from '../views/layout/admin/Layout'

const requireAuth = () => (to, from, next) => {

  if (store.getters.isAuthenticated) {
    console.log('next호출')
    return next();
  }
  console.log('login호출')
  next('/login')
}

const readyAuthToAdmin = () => (to, from, next) => {
  console.log(store.getters.isAuthenticated);
  if (store.getters.isAuthenticated) {
    console.log('next호출')
    next('/admin');
  }
  next();
}

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'main',
      component: Layout,
      children: [
        { path: 'home', component: () => import('@/views/dashboard'), name: 'home' },
        { path: 'home/:page', component: () => import('@/views/dashboard'), name: 'homeNum' },
        { path: 'documentation', component: () => import('@/views/category'), name: 'documentation' },
        { path: 'post/:id', component: () => import('@/views/post'), name: 'post' },
        { path: 'info', component: () => import('@/views/info'), name: 'info' }
      ]
    },
    {
      path: '/login',
      name: 'AdminLogin',
      beforeEnter: readyAuthToAdmin(),
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
    {
      path: '/err',
      name: 'error',
      component: () => import('@/views/errorPage/500'),
      hidden: true
    },
    {
      path: '*',
      component: () => import('@/views/errorPage/404'),
      hidden: true
    }
  ],
  mode: 'history',
});
