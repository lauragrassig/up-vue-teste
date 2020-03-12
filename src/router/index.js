import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fontes from '../views/Fontes.vue'
import SaibaMais from '../views/SaibaMais.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fontes',
    name: 'Fontes',
    component: Fontes
  },
  {
    path: '/saibaMais/:typeId',
    name: 'SaibaMais',
    component: SaibaMais
  }
]

const router = new VueRouter({
  routes
})

export default router
