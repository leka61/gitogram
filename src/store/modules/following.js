import { user } from '../../api'

export default ({
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    SET_FOLLOWINGS(state, payload) {
      state.data = payload
    },
    DELETE_FOLLOWING: (state, payload) => {
      const filteredArray = state.data.filter(item => item.id !== payload.id)
      state.data = filteredArray
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
