import Vuex from 'vuex'

import * as AppsService from './apps/AppsService'
import * as SourcesService from './sources/SourcesService'

export default new Vuex.Store({
  state: {
    apiCards: [],
    apiSource: [],
    apiIconsCards: [{
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
    ],
    apiIconsSource: [{
      id: 0,
      icon: 'fas fa-globe'
    },
    {
      id: 1,
      icon: 'fas fa-briefcase'
    },
    {
      id: 2,
      icon: 'fas fa-tree'
    },
    {
      id: 3,
      icon: 'fas fa-gavel'
    },
    {
      id: 4,
      icon: 'fas fa-ban'
    },
    {
      id: 5,
      icon: 'fas fa-globe-americas'
    },
    {
      id: 6,
      icon: 'fas fa-gem'
    },
    {
      id: 7,
      icon: 'fas fa-male'
    },
    {
      id: 8,
      icon: 'fas fa-piggy-bank'
    }
    ],
    FonteMenu: [],
    loadig: true
  },
  actions: {
    loadApiCards ({ commit }) {
      AppsService.loadCards().then(apiCards => commit('APP_CARDS', apiCards)
      )
    },
    loadApiSource ({ commit }) {
      SourcesService.loadCards().then(apiSource => commit('SOURCE_CARDS', apiSource)
      )
    }
  },
  mutations: {
    APP_CARDS (state, apiCards) {
      AppsService.MutationAppCards(state, apiCards)
    },
    SOURCE_CARDS (state, apiSource) {
      SourcesService.MutationAppCards(state, apiSource, state.FonteMenu)

      state.FonteMenu = state.apiSource
    }
  }
})
