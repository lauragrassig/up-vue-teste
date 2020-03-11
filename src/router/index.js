import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fontes from '../views/Fontes.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
