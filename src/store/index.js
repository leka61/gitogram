import { createStore } from 'vuex'
import trendings from './modules/trendings'
import starred from './modules/starred'
import user from './modules/user'
import auth from './modules/auth'
import repos from './modules/repos'
import following from './modules/following'

export default createStore({
  getters: {
    getUnstarredOnly(state) {
      return state.trendings.data.filter((trendingsRepo) =>
        !state.starred.data.some((starredRepo) => trendingsRepo.id === starredRepo.id))
    }
  },
  modules: {
    trendings,
    starred,
    user,
    auth,
    repos,
    following
  }
})
