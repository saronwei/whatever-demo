import { Component, Prop, Vue } from 'vue-property-decorator';
import { ComponentManager, ComponentCreator } from '@gsafety/whatever/dist';

import Styles from './quick-start.scss';
import Html from './quick-start.html';

@Component({
  name: 'quick-start',
  template: Html,
  style: Styles,
  components: {
    'component-mananger': ComponentManager,
    'component-creator': ComponentCreator
  }
})
export class QuickStartComponent extends Vue {
  // ....

  showCreator: Boolean = false;
  initialCreator: Boolean = false;
  currentComponent: any = {};

  editComponent: any = {};

  onEditorShown() {
    console.log('onEditorShown');
  }
  handleEditFinished() {
    window.alert('元件编辑已完成');
    this.closeCallback();
  }
  handleEditCancel() {
    window.alert('元件编辑已取消关闭');
  }
  handleCreatorClose() {
    window.alert('生成器已关闭');
  }
  onClick() {
    this.initialCreator = true;
    this.showCreator = true;
  }
  closeCallback() {
    this.showCreator = false;
  }
}
