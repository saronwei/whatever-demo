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
  editorProduct: any = {} ;

  @Prop({
    default: true
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

  created() {
    this.editorProduct = this.$route.query.product;
    if (!this.editorProduct) {
      this.editorProduct = {};
    }
    if (this.editorProduct && Object.keys(this.editorProduct).indexOf('extraInfo') >= 0) {
      this.componentExtraInfo = this.editorProduct.extraInfo ? this.editorProduct.extraInfo : { tag: '' };
    }
  }

  handlePreviewValidation(flag: any) {
    const editor = this.$refs['componentEditor'];
    this.$set(editor, 'enableBtnSave', flag);
  }

  handleEditFinished() {
    this.$router.push({ name: 'list' });
  }

  handleEditCancel() {

  }

}
