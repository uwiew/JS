import Vue from 'vue'
import Vuex from 'vuex'

import goodsList from './goodList'
import mineInfo from './mock_user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsList,
    mineInfo
  }
})
