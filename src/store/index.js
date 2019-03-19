import Vuex from 'vuex';
import Vue from 'vue';
import position from './position';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    position
  }
})