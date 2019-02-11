
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
/*全局muicss*/
import "../../../static/css/mui.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
// console.log(mui);
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
