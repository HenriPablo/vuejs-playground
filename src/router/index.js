import Vue from 'vue'
import VueRouter from 'vue-router'
import ResourceHome from '../views/ResourceHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Resource Home',
    component: ResourceHome
  },
  {
    path: '/contact_us',
    name: 'Contact Us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
