import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ComponentManager, ComponentCreator } from '@gsafety/whatever/dist';
import { State } from 'vuex-class';
import { ComponentFilter } from '@gsafety/whatever/dist';

import Styles from './filter.module.scss';
import Html from './filter.html';

@Component({
  name: 'demo-filter',
  template: Html,
  style: Styles,
  components: {
    ComponentFilter
  }
})
export class DemoFilterComponent extends Vue {
  // ....

  @Prop()
  instance: any;
  @Prop({
    default: {}
  })
  extraFilter: any;
  @Prop({
    default: false
  })
  disableExtraFilter!: boolean;
  @Prop({
    default: () => {
      return {
        cleanExtraFilter: true,
        enableTimeFilter: true
      };
    }
  })
  options!: any;

  /**
   * 级联控件默认绑定字段
   *
   * @type {*}
   * @memberof PmsComponentFilter
   */
  defaultProps: any = { children: 'children', label: 'label' };
  /**
   * 附加筛选条件
   *
   * @type {String}
   * @memberof PmsComponentFilter
   */
  extraFilterData: any = [];

  handleSearch() {
    console.log(this);
  }
  /**
   * 处理附加过滤条件的清理逻辑
   *
   * @memberof PmsComponentFilter
   */
  handleCleanFilter() {
    if (this.options.cleanExtraFilter) {
      this.extraFilterData = null;
      this.extraFilterData = [];
    }
  }
}
