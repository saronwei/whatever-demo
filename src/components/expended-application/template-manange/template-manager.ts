import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ComponentManager, ComponentCreator } from '@gsafety/whatever/dist';

import Styles from './template-manager.module.scss';
import Html from './template-manager.html';

import { ComponentList } from '@gsafety/whatever/dist';
import { State } from 'vuex-class';
import { DemoEditor } from '../editor/editor';
import { ComponentTemplate } from '@gsafety/whatever/dist/components/component-template';

@Component({
  name: 'template-manage',
  template: Html,
  style: Styles,
  components: {
    ComponentTemplate,
    'demo-editor': DemoEditor
  }
})
export class TemplateManageComponent extends Vue {
  templateList!: Array<any>;

  //   selectTemplate: any = {};

  extraFilter: any = {
    field: '',
    searchContent: ''
  };
  independentMode = false;
  showDetail = false;
  showEventTypes = false;
  displayBaseEventTypes: Array<any> = [];
  currentBaseEventType: any = {};
  currentEventType: any = {};
  filterText = '';
  currentTypeName = '';
  isShowModel: boolean = false;
  showFullEmptyNotice: boolean = true;

  isRedirect: boolean = false;
  dialogVisible: boolean = false;
  toRouter: any;

  @Watch('filterText')
  handleFilterTextChange(val: string) {
    const tree: any = this.$refs.eventTypeTree;
    if (tree) {
      tree.filter(val);
    }
  }

  mounted() {}

  handleReset() {
    this.currentTypeName = '';

    this.extraFilter = null;
    this.extraFilter = {
      field: '',
      searchContent: ''
    };
    this.showFullEmptyNotice = true;
  }

  handleEventTypeChange(eventType: any) {
    this.showDetail = false;
    this.currentBaseEventType = eventType;
    if (eventType.id !== '') {
      this.currentTypeName = eventType.name;
      this.extraFilter = null;
      this.extraFilter = {
        field: 'eventTypeId',
        searchContent: eventType.id
      };
    }
    setTimeout(() => {
      this.showDetail = true;
      const templateRefs: any = this.$refs['componentTemplate'];
      if (templateRefs) {
        this.showFullEmptyNotice = !templateRefs.showFullEmptyNotice;
      }
    }, 50);
  }

  handleChildEventTypeChange(eventType: any) {
    this.currentEventType = eventType;
    this.currentTypeName = eventType.name;
    this.extraFilter = null;
    this.extraFilter = {
      field: 'eventTypeId',
      searchContent: eventType.id
    };
    const templateRefs: any = this.$refs['componentTemplate'];
    if (templateRefs) {
      this.showFullEmptyNotice = !templateRefs.showFullEmptyNotice;
    }
  }

  handleFilterEventType(value: any, data: any) {
    if (!value) {
      return true;
    }
    return data.label.indexOf(value) >= 0;
  }

  handleNavigate() {
    this.$router.push({ path: 'expended-application' });
  }

  // 当前选择模板
  onSelectTemplete(selectTemData: any) {}

  /**
   * 处理路由跳转
   *
   * @memberof ComponentTemplate
   */
  handleRouteLeave() {
    this.isRedirect = true;
    this.dialogVisible = false;
    this.$router.push({ name: this.toRouter.name });
  }
}
