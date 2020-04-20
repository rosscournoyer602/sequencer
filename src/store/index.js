import Vuex from 'vuex';
import Vue from 'vue';
import position from './position';
import clear from './clear';
import mute from './mute';
import load from './load';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    position,
    clear,
    mute,
    load
  }
})