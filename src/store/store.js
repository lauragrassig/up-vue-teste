import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'https://demo3241810.mockable.io/'

export default new Vuex.Store({
  state: {
    apiCards: [],
    apiSource: [],
    apiIcons: [
      {
        id: 0,
        icon: 'far fa-money-bill-alt'
      },
      {
        id: 1,
        icon: 'fas fa-coins'
      },
      {
        id: 2,
        icon: 'fas fa-share-alt'
      },
      {
        id: 3,
        icon: 'far fa-check-square'
      },
      {
        id: 4,
        icon: 'fas fa-car'
      },
      {
        id: 5,
        icon: 'fas fa-network-wired'
      },
      {
        id: 6,
        icon: 'fas fa-search'
      },
      {
        id: 7,
        icon: 'far fa-file'
      },
      {
        id: 8,
        icon: 'fas fa-address-card'
      },
      {
        id: 9,
        icon: 'fas fa-user-secret'
      },
      {
        id: 10,
        icon: 'fas fa-map-marker-alt'
      },
      {
        id: 11,
        icon: 'fas fa-bullseye'
      }
    ]
  },
  actions: {
    loadApiCards ({ commit }) {
      Vue.axios.get('apps').then(result => {
        commit('APP_CARDS', result.data.apps)
        this.FonteReturn = this.apiCards
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    loadApiSource ({ commit }) {
      Vue.axios.get('sources')
        .then(result => {
          commit('SOURCE_CARDS', result.data.sources)
        }).bind(this)
        .catch(function () {
          this.loading = false
        }.bind(this))
    }
  },
  mutations: {
    APP_CARDS (state, apiCards) {
      state.apiCards = apiCards
    },
    SOURCE_CARDS (state, apiSource) {
      state.apiSource = apiSource
    }
  }
})
