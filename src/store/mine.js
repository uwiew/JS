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
    initMine ({ commit, state }) {
      let data = sessionStorage.getItem('mine') === null
        ? null
        : JSON.parse(sessionStorage.getItem('mine'))
      commit('setMine', data)
    },
    async fetchLogin ({ commit, state }, { username, password }) {
      let { data } = await mine.post('/user/login', { name: username, password })
      sessionStorage.setItem('mine', JSON.stringify(data))
      commit('setMine', data)
    }
  }
}