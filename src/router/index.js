import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/wall',
        name: 'Wall',
        component: () => import('../components/Wall.vue')
      },
      {
        path: '/newpost',
        name: 'Newpost',
        component: () => import('../components/Newpost.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
