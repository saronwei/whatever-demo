import Vue from 'vue';
import Router from 'vue-router';

import { HomeComponent } from '@/components/home/home';
import { QuickStartComponent } from '@/components/quick-start/quick-start';
import { ExpendedApplicationComponent } from '@/components/expended-application/expended-application';
import { TemplateManageComponent } from '@/components/expended-application/template-manange/template-manager';
import { DemoDynamicPageComponent } from '@/components/expended-application/dynamic-page/dynamic-page';
Vue.use(Router);

const routerMaps = [
  {
    path: '/',
    component: HomeComponent,
    name: 'home',
    hidden: true,
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
        path: 'template-manage',
        component: TemplateManageComponent,
        name: 'template-manage',
        hidden: true
      },
      { path: 'dynamic-page', component: DemoDynamicPageComponent, name: 'dynamic-page', hidden: true }
    ]
  }
];

export default new Router({
  routes: routerMaps
});
