// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import VueSimplemde from 'vue-simplemde'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import {store} from './store/store'

import * as filters from './filters'

Vue.component('icon', Icon)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueSimplemde)
Vue.use(ElementUI, {locale});
export const EventBus = new Vue();

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
