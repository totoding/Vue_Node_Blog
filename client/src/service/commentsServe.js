import request from './request'

export async function addComments(comments){
    console.log(comments)
    const resp = await request().post("/api/comments",comments)
    return resp.data
}

export async function getComments(){
    const resp = await request().get("/api/comments/normal")
    return resp.data
}