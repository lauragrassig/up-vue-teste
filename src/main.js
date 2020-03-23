import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import moment from 'moment'
import store from './store/store'

// Bootstrap
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

// Styles
import style from './assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)

Vue.prototype.moment = moment

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

moment.locale('pt-br')

new Vue({
  router,
  store,
  style,
  render: h => h(App)
}).$mount('#app')
