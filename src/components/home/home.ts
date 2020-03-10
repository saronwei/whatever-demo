import { Vue, Component } from 'vue-property-decorator';
import HomeStyle from './home.module.scss';
import HomeHtml from './home.html';
import Draggable from 'vuedraggable';

@Component({
  template: HomeHtml,
  style: HomeStyle,
  components: {
    Draggable
  }
})
export class HomeComponent extends Vue {
  handleSelect(key: any) {
    console.log(key);

    this.$router.push({ name: key === '1' ? 'quick-start' : 'expended-application' });
  }
  handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
