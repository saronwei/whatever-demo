import { Vue, Prop, Component, Watch } from 'vue-property-decorator';
import template from './previewer.html';
import styles from './previewer.module.scss';
import { ComponentPreviewer } from '@gsafety/whatever/dist';

@Component({
  name: 'demo-previewer',
  template: template,
  style: styles,
  components: { ComponentPreviewer }
})
export class DemoPreviewer extends Vue {
  @Prop({
    default: () => {
      return { tag: '' };
    }
  })
  componentExtraInfo: any;
  @Prop({
    default: () => {
      return {};
    }
  })
  previewer: any;
  @Prop({
    default: () => {
      return {
        showComponentTitle: false,
        normalDisplay: false,
        showBasicInfo: true,
        readMode: false,
        printMode: false
      };
    }
  })
  options!: any;
  @Prop({
    default: 'component'
  })
  target!: string;

  handlePreviewValidation(flag: any) {
    this.$emit('on-info-validated', flag);
  }

  beforeDestroy() {}
}
