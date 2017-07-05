import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'

import Goods from '@/views/Goods'
import GoodsDetail from '@/components/Goods/Detail'

import Login from '@/views/Login'
import LoginComponent from '@/components/Login/Index'
import SignupComponent from '@/components/Login/Signup'
import ForgetComponent from '@/components/Login/Forget'

import About from '@/views/About'
import Mine from '@/views/Mine'
import NotFound from '@/views/NotFound'

import Order from '@/views/Order'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/mine', component: Mine },
    { path: '/goods', component: Goods },
    { path: '/goods/:id', component: GoodsDetail },
    {
      path: '/login',
      component: Login,
      children: [
        { path: '/login', component: LoginComponent },
        { path: '/signup', component: SignupComponent },
        { path: '/forget', component: ForgetComponent }
      ]
    },
    { path: '/order/:goodsId', component: Order },
    { path: '*', component: NotFound }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
