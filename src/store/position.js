const state = {
  position: 0
};

const getters = {
  getCurrentPos: state => state.position 
}

const actions = {
  updatePosition: ({ commit }) => {
    commit('setCurrentPos', null)
  }
}

const mutations = {
    setCurrentPos: state => state.position === 16 ? 0 : state.position++ 
}

export default {
  state,
  getters,
  actions,
  mutations
}