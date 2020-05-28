import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    primary:0
  },
  mutations: {
    setPrimary(state,num){
      state.primary = num
      console.log(state,num)
    }
  },
  actions: {
  },
  modules: {
  }
})
