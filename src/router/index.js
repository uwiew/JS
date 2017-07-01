import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Goods from '@/views/Goods'
import About from '@/views/About'
import Mine from '@/views/Mine'
import Login from '@/views/Login'
import LoginComponent from '@/components/Login'
import SignupComponent from '@/components/Login/Signup'
import ForgetComponent from '@/components/Login/Forget'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/goods', component: Goods },
    { path: '/about', component: About },
    { path: '/mine', component: Mine },
    {
      path: '/login',
      component: Login,
      children: [
        { path: '/login', component: LoginComponent },
        { path: '/signup', component: SignupComponent },
        { path: '/forget', component: ForgetComponent }
      ]
    },
    { path: '*', component: NotFound }
  ]
})
