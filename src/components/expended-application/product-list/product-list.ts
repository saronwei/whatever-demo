import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Styles from './product-list.module.scss';
import Html from './product-list.html';
import { ComponentList } from '@gsafety/whatever/dist';
import { State } from 'vuex-class';
import { DemoPreviewer } from '../previewer/previewer';
import { DemoListComponent } from '../list/list';

@Component({
  name: 'product-list',
  template: Html,
  style: Styles,
  components: {
    ComponentList,
    'demo-list': DemoListComponent,
    'demo-previewer': DemoPreviewer
  }
})
export class ProductistComponent extends Vue {

    previewer = {};

    @State((state: any) => state.whatever.componentList)
    componentList: any;

    @Watch('componentList')
    onCmponentListChange(val: any) {
      if (Array.isArray(val) && val.length > 0) {
        this.previewer = val[0];
      }
    }

    handleSelectionChange(val: any) {
        this.previewer = val;
    }

    handleEdit(val: any) {

    }

}
