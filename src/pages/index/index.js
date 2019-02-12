
import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdTabs,MdBottomBar,MdIcon } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import 'vue-material/dist/theme/default.css'
Vue.use(MdButton).use(MdTabs).use(MdBottomBar).use(MdIcon);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
