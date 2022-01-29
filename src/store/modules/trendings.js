import { trendings } from '../../api'

export default ({
  state: {
    data: {},
    loading: false,
    error: false
  },
  mutations: {
    SET_TRENDINGS(state, trendings) {
      state.data = trendings
    }
  },
  actions: {
    async fetchTrendings({ commit }) {
      try {
        const data = await trendings.getTrendings()
        commit('SET_TRENDINGS', data.data.items)
        console.log(data.data.items)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
