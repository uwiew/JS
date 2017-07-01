import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'

import { Button, Carousel, CarouselItem, Form, FormItem, Input, Loading } from 'element-ui'
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Loading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
