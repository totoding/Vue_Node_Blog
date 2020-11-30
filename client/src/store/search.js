export default {
  namespaced: true,
  state: {
    showSearchBar : false
  },
  mutations: {
    changeShowSearchBar(state, payload) {
      state.showSearchBar = payload;
    },
  },
  actions: {
    change({ commit },payload) {
      commit("changeShowSearchBar", payload)
    }
  },
};
