import Vue from 'vue'
import Vuex from 'vuex'

import goodsList from './goodList'
import teamList from './teamList'
import mine from './mine'
import chat from './chat'
import adminChat from './adminChat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsList,
    teamList,
    mine,
    chat,
    adminChat
  }
})
