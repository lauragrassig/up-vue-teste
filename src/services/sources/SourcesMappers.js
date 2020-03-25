import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const BaseURL = 'https://demo3241810.mockable.io/'
export const URL = 'sources'

export const addIcon = (element, stateCardsIconSource) => {
  element.map((card, i) => {
    if (card.id === stateCardsIconSource[i].id) {
      card.icon = stateCardsIconSource[i].icon
    }
  })
}
