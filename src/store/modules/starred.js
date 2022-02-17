import { starred } from '../../api'

export default ({
  namespaced: true,
  state: {
    data: {},
    loading: false,
    error: false
  },
  mutations: {
    SET_STARRED(state, starred) {
      state.data = starred.map(item => {
        item.following = {
          status: false,
          loading: false,
          error: ""
        }
        return item
      })
    },
    SET_ISSUES(state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.issues = {
            ...repo.issues,
            ...payload.content
            // data: payload.content,
            // loading: payload.loading
          }
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
    async fetchStarred({ commit }, limit) {
      try {
        const data = await starred.getStarredRepos({ limit: limit })
        commit('SET_STARRED', data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchIssuesForRepo({ commit, getters }, { id, owner, repo }) {
      try {
        commit("SET_ISSUES", {
          id,
          content: {
            loading: true
          }
        })
        const { data } = await starred.getIssuesForRepo({ owner, repo });
        commit("SET_ISSUES", {
          id,
          content: {
            data: data
          }
        })
      } catch (err) {
        console.log(err);
        commit("SET_ISSUES", {
          id,
          content: {
            loading: false
          }
        })
        throw err
      } finally {
        commit("SET_ISSUES", {
          id,
          content: {
            loading: false
          }
        })
      }
    }
  }
})
