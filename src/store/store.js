import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'https://demo3241810.mockable.io/'

export default new Vuex.Store({
  state: {
    apiCards: []
  },
  actions: {
    loadApiCards ({ commit }) {
      Vue.axios.get('apps').then(result => {
        commit('APP_CARDS', result.data.apps)
        console.log(result.data)
        console.log(this.apiCards)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    }
  },
  mutations: {
    APP_CARDS (state, apiCards) {
      state.apiCards = apiCards
    }
  }
})
