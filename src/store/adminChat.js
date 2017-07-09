import vue from 'vue'
export default {
  state: {
    isShow: false,
    chatList: {},
    newChat: {}
  },
  mutations: {
    addAdminChat (state, payload) {
      state.chatList[payload.from] || (vue.set(state.chatList, payload.from, []))
      state.chatList[payload.from].push(payload)
    },
    setNewChat (state, payload) {
      state.newChat = payload
    }
  },
  actions: {
    popChat ({ commit }, { isShow }) {
      commit('popChat', isShow)
    }
  }
}
