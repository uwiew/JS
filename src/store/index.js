import Vue from 'vue'
import Vuex from 'vuex'

import goodsList from './goodList'
import mineInfo from './mock_user'
import teamList from './mock_team'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsList,
    teamList,
    mineInfo
  }
})
