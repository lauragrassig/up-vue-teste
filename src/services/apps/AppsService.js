import Vue from 'vue'

import {
  BaseURL,
  URL
} from './Apps.mappers'

export const LoadApiCards = () => {
  return Vue.axios.get(`${BaseURL}/${URL}`)
    .then(result => result.data)
}
