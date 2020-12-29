import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/homes',
    name: 'homes',
    component: () => import('../pages/homes/index.vue')
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('../pages/movies/index.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../pages/my/index.vue')
  },
  {
    path: '/consult',
    name: 'consult',
    component: () => import('../pages/consult/index.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../pages/NotFound/index.vue')
  },
]

const router = new VueRouter({
  
  linkActiveClass: 'tab-active',
  routes,
})

export default router
