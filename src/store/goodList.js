import http from 'axios'

export default {
  state: {
    goodsList: [],
    isEnd: false,
    isLoading: false
  },
  mutations: {
    addGoods (state, payload) {
      state.goodsList = state.goodsList.concat(payload)
    },
    setEnd (state) {
      state.isEnd = true
    },
    setLoading (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    async addGoods ({ commit, state }) {
      commit('setLoading', true)
      let goodsList = state.goodsList
      let url = `/goods/list${goodsList.length ? `?startId=${goodsList.slice(-1)[0]._id}` : ''} `
      let list = (await http.get(url)).data
      commit('setLoading', false)
      list.length < 12 ? commit('setEnd') : void (0)
      commit('addGoods', list)
    }
  }
}
