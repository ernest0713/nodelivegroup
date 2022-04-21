import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(axios, VueAxios)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/wall',
    name: 'Wall',
    component: () => import('./components/Wall.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/newpost',
    name: 'Newpost',
    component: () => import('./components/Newpost.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
