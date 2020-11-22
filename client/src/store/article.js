import * as articleServe from "../service/articleServe";

export default {
  namespaced: true,
  state: {
    activeId : null,
    currentArticle : ""
  },
  mutations: {
    setActiveId(state, payload) {
      state.activeId = payload;
    },
    setArticle(state, payload){
        console.log(payload)
        state.currentArticle = payload
    }
  },
  actions: {
    async setId({commit}, id){
        commit("setActiveId", id)
    },
    async getArticleById({commit}, id){
        const resp = await articleServe.getArticleById(id)
        commit("setArticle", resp.data.content)
    }
  },
};
