
import Vue from 'vue'
import App from './App.vue'
import "../../../static/css/mui.css";
import { Button, Cell } from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
