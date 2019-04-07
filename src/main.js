// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'

// import Axios from 'axios'

Vue.use(BootstrapVue)

Vue.config.productionTip = false
Axios.defaults.baseURL = 'https://agile-reaches-83574.herokuapp.com/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
