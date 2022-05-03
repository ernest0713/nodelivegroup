import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'))

router.beforeEach((to, from, next) => {
  // console.log(to.meta.requiresAuth)
  // if(to.meta.requiresAuth){

  // }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
