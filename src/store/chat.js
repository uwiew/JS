
export default {
  state: {
    isShow: false,
    chatList: []
  },
  mutations: {
    popChat (state, payload) {
      state.isShow = payload
    },
    addChat (state, payload) {
      state.chatList.push(payload)
    },
    setChatList (state, payload) {
      state.chatList = payload
    }
  },
  actions: {
    popChat ({ commit }, { isShow }) {
      commit('popChat', isShow)
    }
  }
}
