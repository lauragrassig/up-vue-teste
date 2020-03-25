// import Vue from 'vue'
import axios from 'axios'
import {
  BaseURL,
  URL
} from './Apps.mappers'

export const loadCards = () => {
  return axios.get(`${BaseURL}/${URL}`)
    .then(result => result.data.apps)
}

export const teste = () => {
  console.log('teste')
}
