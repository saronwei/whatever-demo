import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import template from './creator.html';
import styles from './creator.module.scss';
import { ComponentCreator } from '@gsafety/whatever/dist/components/component-creator';
import { DemoEditor } from '../editor/editor';
// import { PmsCompTemplateManager } from '../template/component-template';

@Component({
  name: 'pms-component-creator',
  template: template,
  style: styles,
  components: {
    ComponentCreator,
    'demo-editor': DemoEditor
    //  PmsComponentEditor, PmsCompTemplateManager
  }
})
export class DemoCreator extends Vue {
  @Prop({
    default: () => {
      return {};
    }
  })
  creator: any;
}
