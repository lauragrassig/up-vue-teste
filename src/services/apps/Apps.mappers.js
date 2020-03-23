import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const mapSearchDetailsCriteria = ({
  id,
  name,
  status,
  criterion,
  matches,
  type,
  list,
}) => ({
  id,
  name,
  status,
  criterion,
  type,
  matchesTotal: matches,
  listId: list.id,
  listNames: list.name,
});
