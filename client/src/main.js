import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
// import "./assets/css/reset.css"
import { Icon } from 'element-ui';

// store.dispatch("user/whoAmI")

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.use(Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
