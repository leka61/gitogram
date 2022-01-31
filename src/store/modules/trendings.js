import { trendings, repos } from '../../api'

export default ({
  namespaced: true,
  state: {
    data: {},
    loading: false,
    error: false
  },
  mutations: {
    SET_TRENDINGS(state, trendings) {
      state.data = trendings
    },
    SET_README(state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo;
      })
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
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
    },
    async fetchReadme({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id);
      if (curRepo.readme !== undefined) return;
      try {
        const { data } = await repos.getReadme({ owner, repo });
        commit("SET_README", { id, content: data })
      } catch(err) {
        console.log(err);
        throw err
      }
    }
  }
})
