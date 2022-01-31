import { createStore } from 'vuex'
import trendings from './modules/trendings'
// import readme from './modules/readme'

export default createStore({
  // state: {
  //   foo: "bar"
  // },
  modules: {
    trendings
  }
})
