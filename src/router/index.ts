import Vue from 'vue';
import Router from 'vue-router';

import { HomeComponent } from '@/components/home/home';
import { QuickStartComponent } from '@/components/quick-start/quick-start';
import { ExpendedApplicationComponent } from '@/components/expended-application/expended-application';
import { DemoDynamicPageComponent } from '@/components/expended-application/dynamic-page/dynamic-page';
import { DemoEditor } from './../components/expended-application/editor/editor';
import { ProductistComponent } from '@/components/expended-application/product-list/product-list';

Vue.use(Router);

const routerMaps = [
  {
    path: '/',
    component: HomeComponent,
    name: 'home',
    hidden: true,
    redirect: '/edit', // 重定向
    children: [
      {
        path: 'quick-start',
        component: QuickStartComponent,
        name: 'quick-start',
        hidden: true
      },
      {
        path: 'expended-application',
        component: ExpendedApplicationComponent,
        name: 'expended-application',
        hidden: true
      },
      {
        path: 'edit',
        component: DemoEditor,
        name: 'edit',
        hidden: true
      },
      {
        path: 'list',
        component: ProductistComponent,
        name: 'list',
        hidden: true
      },
      { path: 'dynamic-page', component: DemoDynamicPageComponent, name: 'dynamic-page', hidden: true }
    ]
  }
];

export default new Router({
  routes: routerMaps
});
