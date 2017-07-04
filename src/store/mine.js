import http from 'axios'

let mine = http.create({
  withCredentials: true
})

export default {
  state: {
    mine: null,
    isEnd: false,
    isLoading: false
  },
  mutations: {
    setMine (state, payload) {
      state.mine = payload
    }
  },
  actions: {
    async fetchLogin ({ commit, state }, { username, password }) {
      let { data } = await mine.post('/user/login', { name: username, password })
      commit('setMine', data)
    }
  }
}
