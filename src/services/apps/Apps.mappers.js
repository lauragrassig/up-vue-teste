import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const BaseURL = 'https://demo3241810.mockable.io/'
export const URL = 'apps'

// export const APP_CARDS = (state, apiCards) => {
//   state.apiCards = apiCards
//   this.apiCards = state.apiCards
//   console.log('aqui mappers foi')
//   // this.apiCards = addIcon(apiCards)
// }

// export function addIcon(element) {
//   element.map((card, i) => {
//     if (card.id === state.apiIconsCards[i].id) {
//       card.icon = state.apiIconsCards[i].icon
//     }
//   })
//   console.log(element)
// }
