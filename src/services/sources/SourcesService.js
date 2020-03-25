import axios from 'axios'

import * as SourcesMappers from './SourcesMappers'

export const loadCards = () => {
  return axios.get(`${SourcesMappers.BaseURL}/${SourcesMappers.URL}`)
    .then(result => result.data.sources)
}

export const MutationAppCards = (state, apiSource) => {
  state.apiSource = apiSource
  apiSource = state.apiSource
  apiSource = SourcesMappers.addIcon(apiSource, state.apiIconsSource)
}
