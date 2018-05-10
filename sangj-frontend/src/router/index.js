import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import documentation from '@/components/documentation/documentation';

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
      name: 'documentation',
      component: documentation,
    },
  ],
  mode: 'history',
});
