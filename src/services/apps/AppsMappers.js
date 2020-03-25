import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const BaseURL = 'https://demo3241810.mockable.io/'
export const URL = 'apps'

export const addIcon = (element, stateCardsIcon) => {
  element.map((card, i) => {
    if (card.id === stateCardsIcon[i].id) {
      card.icon = stateCardsIcon[i].icon
    }
  })
}
