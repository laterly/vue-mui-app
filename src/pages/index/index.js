
import Vue from 'vue'
import App from './App.vue'
/*全局muicss*/
import "../../../static/css/mui.css";
Vue.config.productionTip = false;
import { Button, Cell } from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
