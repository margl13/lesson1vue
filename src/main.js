import Vue from 'vue'
import App from './App.vue'
import './vueresource/index'
import router from "./router";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
