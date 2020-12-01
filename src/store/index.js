import Vue from 'vue'
import Vuex from 'vuex'
import VuexWebExtensions from 'vuex-webextensions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hist: [
      'qweqwe'
    ]
  },
  mutations: {
    UPDATE_HIST: (state, payload) => {
      state.hist.push(payload)
    }
  },
  actions: {
    updateHist ({ commit, state }, payload) {
      return new Promise(resolve => {
        commit('UPDATE_HIST', payload)
        resolve(
          state.hist
        )
      })
    }
  },
  modules: {},
  plugins: [VuexWebExtensions({
    persistentStates: ['hist'],
    loggerLevel: 'verbose'
  })]
})
