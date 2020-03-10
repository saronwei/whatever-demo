import Vue from 'vue';
import router from './router';
import store from './store';
import i18n from './i18n/index';
import config from './utils/app-config';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 解决页面刷新滚动条样式问题
import '@/assets/styles/base/reset.scss';
import { ConfigHelper } from '@gsafety/whatever/dist/util/config-helper';

import VueTsCss from 'vue-css-ts';

import 'element-ui/lib/theme-chalk/index.css';

config(store).then(() => {
  Vue.config.productionTip = false;

  Vue.use(ElementUI, { size: 'small' });
  Vue.use(VueTsCss);
  ConfigHelper.use(store.getters.configs);

  new Vue({
    router,
    store,
    i18n
  }).$mount('#app-main');
});
