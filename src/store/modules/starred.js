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
          repo.issues = payload.content
        }
        console.log(repo);
        return repo;
      })
    }
    // SET_FOLLOWING: (state, payload) => {
    //   state.data = state.data.map((repo) => {
    //     if (payload.id === repo.id) {
    //       repo.following = {
    //         ...repo.following,
    //         ...payload.data
    //       }
    //     }
    //     return repo
    //   })
    // }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  actions: {
    async fetchStarred({ commit }) {
      try {
        const data = await starred.getStarredRepos({ limit: 25 })
        commit('SET_STARRED', data.data)
        // console.log(data.data.items)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchIssuesForRepo({ commit, getters }, { id, owner, repo }) {
    //   const curRepo = getters.getRepoById(id);
      try {
        const { data } = await starred.getIssuesForRepo({ owner, repo });
        commit("SET_ISSUES", { id, content: data })
      } catch (err) {
        console.log(err);
        throw err
      }
    }
  }
})
