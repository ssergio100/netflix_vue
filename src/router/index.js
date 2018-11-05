import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/pages/home/Home'
import Contato from '@/pages/Contato'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})