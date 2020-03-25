// import Vue from 'vue'
import axios from 'axios'
import {
  BaseURL,
  URL
} from './Apps.mappers'

export const loadApiCards = () => {
  return axios.get(`${BaseURL}/${URL}`)
    .then(result => result.data.apps)
    .catch(error => {
      throw new Error(`API ${error}`)
    })
}
