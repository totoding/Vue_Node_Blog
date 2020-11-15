import request from './request'

export async function login(username, password){
    const resp =  await request().post("/api/login", {username, password})
    return resp.data
}

export async function logout(){
    localStorage.removeItem("token")
}

export async function whoAmI(){
    const resp =  await request().get("/api/whoami")
    return resp.data
}
