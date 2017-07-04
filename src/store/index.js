import Vue from 'vue'
import Vuex from 'vuex'

import goodsList from './goodList'
import teamList from './teamList'
import mine from './mine'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsList,
    teamList,
    mine
  }
})
