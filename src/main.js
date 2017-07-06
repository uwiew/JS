import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'

import { Button, Carousel, CarouselItem, Form, FormItem, Input, Loading, InputNumber, Tabs, TabPane, Message, Step, Steps, Table, TableColumn } from 'element-ui'
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Loading)
Vue.use(InputNumber)
Vue.use(Tabs)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(TabPane)
Vue.use(Step)
Vue.use(Steps)

Vue.prototype.$message = Message

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
