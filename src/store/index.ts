import Vue from 'vue';
import Vuex from 'vuex';
import { whatever } from '@gsafety/whatever/dist/store/modules/whatever';

import { dependencyData } from '@gsafety/whatever/dist/store/modules/dependency-data';
import { templateStore } from '@gsafety/whatever/dist/store/modules/templates';
import { systemConfig } from '@gsafety/whatever/dist/store/modules/system-config';
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    whatever,
    systemConfig,
    templateStore,
    dependencyData
  }
});

export default store;
