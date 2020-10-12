import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //This is where i give innitial state for Makes.
  state: {
    yearvuex: '1995'
  },
  getters:{
    makesUrl(state) {
      return `https://rateengine.ship.cars/v2/vehicles/makes/?format=json&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef&year=${state.yearvuex}`
    }
  },
  mutations: {
    setYear(state, year){
      state.yearvuex = year;
    }
  },
  actions: {
    updateYearVuex({ commit }, year){
      commit('setYear', year)
    }
  },
  modules: {
  }
})
