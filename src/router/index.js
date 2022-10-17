import { createRouter, createWebHistory } from 'vue-router'
import display from '../views/display.vue'
import about from '../views/about.vue'
import Notfound from '../views/notpage.vue'

const routes = [
  {
    path: '/display',
    name: 'display',
    component: display
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  { path: "/:catchAll(.*)", component: Notfound,},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
