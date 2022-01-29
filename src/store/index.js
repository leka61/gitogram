import { createStore } from 'vuex'
import trendings from './modules/trendings'

export default createStore({
  // state: {
  //   foo: "bar"
  // },
  modules: {
    trendings
  }
})
