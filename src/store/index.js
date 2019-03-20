import Vuex from 'vuex';
import Vue from 'vue';
import position from './position';
import clear from './clear';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    position,
    clear
  }
})