import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    primary:0,
    Introduction:0
  },
  mutations: {
    setPrimary(state,num){
      state.primary = num
    },
    setIntroduction(state,num){
      state.Introduction = num
    }
  },
  actions: {
  },
  modules: {
  }
})
