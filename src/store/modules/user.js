import { user } from '../../api'

export default ({
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.data = user
      // user.map(item => {
      //   return item
      // })
    }
  },
  getters: {
    hasUser: () => () => {
      return localStorage.getItem('token') || 0
    }
  },
  actions: {
    async getUser({ commit }) {
      try {
        const data = await user.getUserData()
        commit('SET_USER', data.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
