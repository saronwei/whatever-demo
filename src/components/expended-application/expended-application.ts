import { Component, Prop, Vue } from 'vue-property-decorator';
import { ComponentManager, ComponentCreator } from '@gsafety/whatever/dist';

import Styles from './expended-application.scss';
import Html from './expended-application.html';
import { DemoListComponent } from '@/components/expended-application/list/list';
import { DemoCreator } from '@/components/expended-application/creator/creator';

@Component({
  name: 'expended-application',
  template: Html,
  style: Styles,
  components: {
    ComponentManager,
    'demo-list': DemoListComponent,
    'demo-creator': DemoCreator
  }
})
export class ExpendedApplicationComponent extends Vue {
  // ....

  startCreate: Boolean = false;
  startEdit: Boolean = false;
  currentComponent: any = {};
  editor: any = {};
  editComponent: any = {};

  //#region data define
  inComponentEditState = false;

  handleEditorShown() {
    this.inComponentEditState = true;
    console.log(111, this.$store);
  }
  handleEditorClose() {
    this.inComponentEditState = false;
    console.log(222, this);
  }

  navToTemplate() {
    this.$router.push({ name: 'template-manage' });
  }
  navToDynamicpage() {
    this.$router.push({ name: 'dynamic-page' });
  }
}
