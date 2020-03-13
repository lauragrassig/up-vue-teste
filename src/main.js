import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import moment from 'moment'

// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Styles
import style from './assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)

Vue.prototype.moment = moment

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  style,
  render: h => h(App)
}).$mount('#app')
