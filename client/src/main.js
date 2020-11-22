import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import { Icon } from 'element-ui';
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";


Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.use(Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
