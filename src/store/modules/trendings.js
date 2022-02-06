import { trendings, repos, starred } from '../../api'

export default ({
  namespaced: true,
  state: {
    data: {},
    loading: false,
    error: false
  },
  mutations: {
    SET_TRENDINGS(state, trendings) {
      state.data = trendings.map(item => {
        item.following = {
          status: false,
          loading: false,
          error: ""
        }
        return item
      })
    },
    SET_README(state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo;
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }
        return repo
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
      } catch (err) {
        console.log(err);
        throw err
      }
    },
    async starRepo({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      console.log("id", id);
      commit("SET_FOLLOWING", {
        id,
        data: {
          status: false,
          loading: true,
          error: ""
        }
      })
      try {
        await starred.starRepo({ owner: owner.login, repo })
        commit("SET_FOLLOWING", {
          id,
          data: {
            status: true
          }
        })
      } catch (err) {
        console.log(err);
        commit("SET_FOLLOWING", {
          id,
          data: {
            status: false,
            error: "Error"
          }
        })
      } finally {
        commit("SET_FOLLOWING", {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
})
