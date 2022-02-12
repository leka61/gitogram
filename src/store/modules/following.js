import { user } from '../../api'

export default ({
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    SET_FOLLOWINGS(state, payload) {
      state.data = payload
      // state.data.repos = payload
    }
  },
  actions: {
    async getUserFollowings({ commit }) {
      try {
        const data = await user.getUserFollowing()
        commit('SET_FOLLOWINGS', data.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
