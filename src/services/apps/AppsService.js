import axios from 'axios'

import * as AppsMappers from './AppsMappers'

export const loadCards = () => {
  return axios.get(`${AppsMappers.BaseURL}/${AppsMappers.URL}`)
    .then(result => result.data.apps)
}

export const MutationAppCards = (state, apiCards) => {
  state.apiCards = apiCards
  apiCards = state.apiCards
  apiCards = AppsMappers.addIcon(apiCards, state.apiIconsCards)
}
