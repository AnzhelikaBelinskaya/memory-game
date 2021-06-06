import Vue from 'vue'
import Vuex from 'vuex'
import { router } from './router'
import { operator } from './helpers/'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    config: {
      length: null,
      timeout: null,
    },
    number: null,
    result: null
  }

}

export const store = new Vuex.Store({
  state: getDefaultState(),
  actions: {
    start({ dispatch, commit }, config) {
      commit('setConfig', config)
      dispatch('startRound')
      router.push('/play')
    },
    startRound({ state, commit }) {
      const number = operator.generate(state.config.length)
      commit('setNumber', number)
    },
    check({ state, commit }, userNumber) {
      const result = operator.compare(state.number, userNumber)
      commit('setResult', result)
    },
    stop({ commit }) {
      commit('resetState')
      router.push('/')
    }
  },
  mutations: {
    setConfig(state, config) {
      const {length = 2, timeout = 1} = config
      state.config.length = length;
      state.config.timeout = timeout * 1000;
    },
    setNumber(state, number) {
      state.number = number
    },
    setResult(state, result) {
      state.result = result
    },
    resetState(state) {
      Object.assign(state, getDefaultState())
    }
  }
})