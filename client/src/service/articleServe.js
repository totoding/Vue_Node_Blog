

import request from './request'

export async function addArticle(article){
    const resp = await request().post("/api/article",article)
    return resp.data
}
export async function getArticleList(){
    const resp = await request().get("/api/article")
    return resp.data
}

export async function getArticleById(id){
    const resp = await request().get("/api/article/" + id)
    return resp.data
}