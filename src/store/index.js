import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yearvuex: '',
    makevuex: ''
  },
  getters:{
    makesUrl(state) {
      return `https://rateengine.ship.cars/v2/vehicles/makes/?format=json&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef&year=${state.yearvuex}`
    },
    modelsUrl(state) {
      return `https://rateengine.ship.cars/v2/vehicles/models/?year=${state.yearvuex}&make=${state.makevuex}&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef`
    }
  },
  mutations: {
    setYear(state, year){
      state.yearvuex = year;
    },
    setMake(state,make){
      state.makevuex = make
    }
  },
  actions: {
    updateYearVuex({ commit }, year){
      commit('setYear', year)
    },
    updateMakeVuex({ commit }, make){
      commit('setMake', make)
    }
  },
  modules: {
  }
})
