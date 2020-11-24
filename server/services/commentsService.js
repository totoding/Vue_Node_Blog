const { async } = require('validate.js')
const Comments = require('../models/Comments')

exports.addComments = async function (payload){
    payload.nickName ? payload : payload.nickName = "游客"
    payload.blogId ? payload : payload.blogId = 0
    payload.parentId ? payload : payload.parentId = 0
    const ins = await Comments.create(payload)
    return ins.toJSON()
}

exports.getCommentByBlogId = async function (query){

}

exports.getCommentNormal = async function (query){
    
}