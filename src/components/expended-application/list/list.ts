import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ComponentManager, ComponentCreator } from '@gsafety/whatever/dist';

import Styles from './list.scss';
import Html from './list.html';

import { ComponentList } from '@gsafety/whatever/dist';
import { State } from 'vuex-class';
import { DemoFilterComponent } from '@/components/expended-application/filter/filter';
// import { DemoPreviewer } from '../previewer/previewer';

@Component({
  name: 'demo-list',
  template: Html,
  style: Styles,
  components: {
    ComponentList,
    'demo-filter': DemoFilterComponent
    // 'demo-previewer': DemoPreviewer
  }
})
export class DemoListComponent extends Vue {
  // ....
  @Prop({
    default: () => {
      return {};
    }
  })
  instance: any;
  @Prop({
    default: () => {
      return {
        miniMode: false,
        choosenItems: []
      };
    }
  })
  options!: any;
  @Prop({
    default: () => {
      return {};
    }
  })
  filter!: any;
  @Prop({
    default: false
  })
  disableExtraFilter!: boolean;
  @Prop({
    default: true
  })
  enableSelfDataLoad!: boolean;
  @Prop({
    default: () => {
      return {
        cleanExtraFilter: true,
        enableTimeFilter: true
      };
    }
  })
  filterOptions!: any;

  @State((state: any) => state.eventType.allEventTypes)
  eventTypes: any;

  multiTenancys: Array<any> = [];

  handlePush: any = () => {};

  @Watch('instance', { deep: true })
  handleInstanceChange(val: any) {
    this.initializeEvents(val);
  }

  handleSelectChange(val: any) {
    this.$emit('selection-change', val);
  }

  handleEdit(val: any) {
    this.$emit('edit', val);
  }

  mounted() {
    // console.log(`==========================================================`);
    // const changePwd: any = document.querySelector(
    //   '.content-item'
    // ) as HTMLDivElement;
    // console.log(changePwd);
    // console.log(`==========================================================`);
  }

  created() {
    if (this.instance) {
      this.initializeEvents(this.instance);
    }
  }

  /**
   * 初始化事件
   *
   * @param {*} val
   * @memberof PmsComponentList
   */
  initializeEvents(val: any) {
    if (val.handleComponentEdit) {
      this.handleEdit = val.handleComponentEdit;
    }
    if (val.handleItemSelectChange) {
      this.handleSelectChange = val.handleItemSelectChange;
    }
    if (val.handleInsertComponent) {
      this.handlePush = val.handleInsertComponent;
    }
  }
}
