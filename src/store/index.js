import Vue from 'vue'
import Vuex from 'vuex'

import goodsList from './mock_goods'
import mineInfo from './mock_user'
import teamList from './mock_team'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList,
    teamList,
    mineInfo
  }
})
