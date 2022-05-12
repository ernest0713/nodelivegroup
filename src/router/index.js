import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Home.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'wall',
        component: () => import('../components/Wall.vue')
        // requiresAuth: true
      },
      {
        path: 'newpost',
        component: () => import('../components/Newpost.vue')
        // requiresAuth: true
      },
      {
        path: 'followers',
        component: () => import('../components/Followers.vue')
        // requiresAuth: true
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../components/Register.vue')
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
