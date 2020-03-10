import { Vue, Component, Prop } from 'vue-property-decorator';
import template from './editor.html';
import style from './editor.module.scss';
import { DemoPreviewer } from '../previewer/previewer';
import { ComponentEditorLauncher } from '@gsafety/whatever/dist';

@Component({
  template: template,
  style: style,
  name: 'demo-editor',
  components: {
    'demo-previewer': DemoPreviewer,
    ComponentEditorLauncher
  }
})
export class DemoEditor extends Vue {
  @Prop({
    default: () => {
      return {};
    }
  })
  editor: any;
  @Prop({
    default: false
  })
  saveToLocalCache!: boolean;

  componentExtraInfo: any = { tag: '' };

  options = {
    showComponentTitle: false,
    normalDisplay: false,
    showBasicInfo: true,
    readMode: false,
    printMode: true
  };

  mounted() {
    if (this.editor && Object.keys(this.editor).indexOf('component') >= 0) {
      this.componentExtraInfo = this.editor.component.extraInfo ? this.editor.component.extraInfo : { tag: '' };
    }
  }

  handlePreviewValidation(flag: any) {
    const editor = this.$refs['componentEditor'];
    this.$set(editor, 'enableBtnSave', flag);
  }
}
