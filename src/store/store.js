// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(Vuex)
// Vue.use(VueAxios, axios)

// Vue.axios.defaults.baseURL = 'https://demo3241810.mockable.io/'

// export default new Vuex.Store({
//   state: {
//     apiCards: [],
//     apiSource: [],
//     apiIconsCards: [{
//       id: 0,
//       icon: 'far fa-money-bill-alt'
//     },
//     {
//       id: 1,
//       icon: 'fas fa-coins'
//     },
//     {
//       id: 2,
//       icon: 'fas fa-share-alt'
//     },
//     {
//       id: 3,
//       icon: 'far fa-check-square'
//     },
//     {
//       id: 4,
//       icon: 'fas fa-car'
//     },
//     {
//       id: 5,
//       icon: 'fas fa-network-wired'
//     },
//     {
//       id: 6,
//       icon: 'fas fa-search'
//     },
//     {
//       id: 7,
//       icon: 'far fa-file'
//     },
//     {
//       id: 8,
//       icon: 'fas fa-address-card'
//     },
//     {
//       id: 9,
//       icon: 'fas fa-user-secret'
//     },
//     {
//       id: 10,
//       icon: 'fas fa-map-marker-alt'
//     },
//     {
//       id: 11,
//       icon: 'fas fa-bullseye'
//     }
//     ],
//     apiIconsSource: [{
//       id: 0,
//       icon: 'fas fa-globe'
//     },
//     {
//       id: 1,
//       icon: 'fas fa-briefcase'
//     },
//     {
//       id: 2,
//       icon: 'fas fa-tree'
//     },
//     {
//       id: 3,
//       icon: 'fas fa-gavel'
//     },
//     {
//       id: 4,
//       icon: 'fas fa-ban'
//     },
//     {
//       id: 5,
//       icon: 'fas fa-globe-americas'
//     },
//     {
//       id: 6,
//       icon: 'fas fa-gem'
//     },
//     {
//       id: 7,
//       icon: 'fas fa-male'
//     },
//     {
//       id: 8,
//       icon: 'fas fa-piggy-bank'
//     }
//     ],
//     FonteMenu: [],
//     loadig: true
//   },
//   actions: {
//     loadApiCards ({
//       commit
//     }) {
//       Vue.axios.get('apps').then(result => {
//         commit('APP_CARDS', result.data.apps)
//       }).catch(error => {
//         throw new Error(`API ${error}`)
//       })
//     },
//     loadApiSource ({
//       commit
//     }) {
//       Vue.axios.get('sources')
//         .then(result => {
//           commit('SOURCE_CARDS', result.data.sources)
//           this.loading = false
//         }).bind(this)
//         .catch(function () {
//           this.loading = false
//         }.bind(this))
//     }
//   },
//   mutations: {
//     APP_CARDS (state, apiCards) {
//       state.apiCards = apiCards
//       this.apiCards = state.apiCards
//       this.apiCards = addIcon(apiCards)

//       function addIcon (element) {
//         element.map((card, i) => {
//           if (card.id === state.apiIconsCards[i].id) {
//             card.icon = state.apiIconsCards[i].icon
//           }
//         })
//       }
//     },
//     SOURCE_CARDS (state, apiSource) {
//       state.apiSource = apiSource
//       this.apiSource = state.apiCards
//       this.apiSource = addIcon(apiSource)

//       function addIcon (element) {
//         element.map((card, i) => {
//           if (card.id === state.apiIconsSource[i].id) {
//             card.icon = state.apiIconsSource[i].icon
//           }
//         })
//         state.FonteMenu = element
//       }
//     }
//   }
// })
