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
    // SET_USER_REPOS(state, payload) {
    //   state.data = { ...state.data, repos: payload }
    //   // state.data.repos = payload
    // }
  },
  getters: {
    hasUser: () => () => {
      return localStorage.getItem('token') || 0
    }
    // getUserRepos: () => () => {
    //   return user.getUserRepos()
    // }
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
    // async getUserRepos({ commit, state }) {
    //   try {
    //     const data = await user.getUserRepos()
    //     if (state.data.repos !== undefined) return;
    //     commit('SET_USER_REPOS', data.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
})
