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
    },
    DELETE_FOLLOWING: (state, payload) => {
      delete state.data[payload.id]
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
    },
    async unFollowUser({ commit }, { username, id }) {
      try {
        await user.unFollowUser({ username })
        commit("DELETE_FOLLOWING", {
          id
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
})
