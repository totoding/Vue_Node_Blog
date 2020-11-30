import * as articleServe from "../service/articleServe";
export default {
  namespaced: true,
  state: {
    activeId : null,
    currentArticle : "",
    ArticleList : [],
    changeCount : 0 //用于监听文章数据变化
  },
  mutations: {
    setActiveId(state, payload) {
      state.activeId = payload;
    },
    setArticle(state, payload){
        state.currentArticle = payload
    },
    setArticleList(state, payload){
        state.articleList = payload
        state.changeCount == 0 ? state.changeCount = 1 : state.changeCount = 0
    }
  },
  actions: {
    async setId({commit}, id){
        commit("setActiveId", id)
    },
    async getArticleById({commit}, id){
        const resp = await articleServe.getArticleById(id)
        commit("setArticle", resp.data.content)
    },
    async getArticleByFilter({commit}, content){
        const resp = await articleServe.getArticleListByFilter(content)
        commit("setArticleList", resp.data)
    },
    async getAllArticleList({commit}){
        const resp = await articleServe.getArticleList()
        commit("setArticleList", resp.data)
    }
  },
};
