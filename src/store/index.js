import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

let state = {
  goodsCart: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
