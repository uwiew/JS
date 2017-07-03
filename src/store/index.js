import Vue from 'vue'
import Vuex from 'vuex'

import goodsList from './mock_goods'
import mineInfo from './mock_user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList,
    mineInfo
  }
})
