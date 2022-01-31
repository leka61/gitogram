import { repos } from '../../api'

export default ({
  state: {
    data: {},
    loading: false,
    error: false
  },
  mutations: {
    SET_README(state, readme) {
      state.data = readme
    }
  },
  actions: {
    async fetchReadme({ commit }, { obj }) {
      try {
        const data = await repos.getReadme(obj)
        commit('SET_README', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
