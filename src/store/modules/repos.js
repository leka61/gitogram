import { user } from '../../api'

export default ({
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    SET_REPOS(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async getUserRepos({ commit }) {
      try {
        const data = await user.getUserRepos()
        commit('SET_REPOS', data.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
