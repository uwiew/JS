import Vue from 'vue'
import Vuex from 'vuex'

import goodsList from './goodList'
import teamList from './teamList'
import mine from './mine'
import chat from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsList,
    teamList,
    mine,
    chat
  }
})
