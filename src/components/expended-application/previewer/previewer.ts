import { Vue, Prop, Component, Watch } from 'vue-property-decorator';
import template from './previewer.html';
import styles from './previewer.module.scss';
import { ComponentPreviewer } from '@gsafety/whatever/dist';
import { State } from 'vuex-class';

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

  // 所有商品类型
  @State((state: any) => {
    return state.dependencyData.componentTypes;
  })
  componentTypes!: Array<any>;

  // 当前商品类型
  selectComponentType = '';

  // 商品价格
  num: Number = 100;

  handlePreviewValidation(flag: any) {
    this.$emit('on-info-validated', flag);
  }

  // 修改商品类型
  handleComponentTypeChange(val: string) {
    if (Array.isArray(this.componentTypes) && this.componentTypes.length > 0) {
      const result = this.componentTypes.filter((type: any) => {
        return type.id === val;
      });
      if (result.length > 0) {
        this.$set(this.componentExtraInfo, 'cellTypeId', result[0].id);
        this.$set(this.componentExtraInfo, 'cellTypeName', result[0].name);
      }
    }
  }

  // 修改商品价格
  handleChange(value: any) {
    if (value && value > 0) {
      this.$set(this.componentExtraInfo, 'price', value);
    }
  }



  beforeDestroy() {}
}
