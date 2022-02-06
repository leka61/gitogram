import { createStore } from 'vuex'
import trendings from './modules/trendings'
import starred from './modules/starred'
import user from './modules/user'
import auth from './modules/auth'
// import readme from './modules/readme'

export default createStore({
  // state: {
  //   foo: "bar"
  // },
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
    auth
  }
})
