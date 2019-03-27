const state = {
  mute: true 
};

const getters = {
  getMute: state => state.mute 
}

const actions = {
  toggleMute: ({ commit }) => {
    commit('setMute')
  }
}

const mutations = {
    setMute: (state) => state.mute = !state.mute
}

export default {
  state,
  getters,
  actions,
  mutations
}