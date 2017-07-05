import http from 'axios'

let mine = http.create({
  withCredentials: true
})

export default {
  state: {
    mine: {},
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
      let data = window.sessionStorage.getItem('mine') === null
        ? null
        : JSON.parse(window.sessionStorage.getItem('mine'))
      commit('setMine', data)
    },
    async fetchLogin ({ commit, state }, { username, password }) {
      let { data } = await mine.post('/user/login', { name: username, password })
      window.sessionStorage.setItem('mine', JSON.stringify(data))
      commit('setMine', data)
    },
    async updateUserInfo ({ commit, state }) {
      let userInfo = (await http.get(`/userPrivate/info`)).data
      commit('setMine', userInfo)
    }
  }
}
