import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Styles from './product-list.module.scss';
import Html from './product-list.html';
import { ComponentList } from '@gsafety/whatever/dist';
import { State } from 'vuex-class';
import { DemoListComponent } from '../list/list';
import { ComponentPreviewer } from '@gsafety/whatever/dist';

@Component({
  name: 'product-list',
  template: Html,
  style: Styles,
  components: {
    ComponentList,
    'demo-list': DemoListComponent,
    'component-previewer': ComponentPreviewer
  }
})
export class ProductistComponent extends Vue {

    product = {};

    @Prop({
      default: () => {
        return {
          showComponentTitle: false,
          normalDisplay: true,
          showBasicInfo: false,
          readMode: true,
          printMode: true
        };
      }
    })
    options!: any;

    @State((state: any) => state.whatever.componentList)
    componentList: any;

    @Watch('componentList')
    onCmponentListChange(val: any) {
      if (Array.isArray(val) && val.length > 0) {
        this.product = val[0];
      }
    }

    handleSelectionChange(val: any) {
        this.product = val;
    }

    handleEdit(val: any) {
      this.$router.push({
        path: '/edit',
        query: {
          product: val
        }
    });
    }

    handlePreviewValidation(flag: any) {
      this.$emit('on-info-validated', flag);
    }
}
