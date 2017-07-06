import http from 'axios'

let mine = http.create({
  withCredentials: true
})

export default {
  state: {
    mine: null,
    isEnd: false,
    isLoading: false,
    isFinishUpdate: true
  },
  mutations: {
    setMine (state, payload) {
      state.mine = payload
    }
  },
  actions: {
    async initMine ({ dispatch }) {
      dispatch('updateUserInfo')
    },
    async fetchLogin ({ commit, state }, { username, password }) {
      let { data } = await mine.post('/user/login', { name: username, password })
      commit('setMine', data)
    },
    async updateUserInfo ({ commit, state }) {
      let userInfo
      state.isFinishUpdate = false
      try {
        userInfo = (await http.get(`/userPrivate/info`)).data
      } catch (e) {
        state.isFinishUpdate = true
        return
      }
      state.isFinishUpdate = false
      commit('setMine', userInfo)
    }
  }
}
