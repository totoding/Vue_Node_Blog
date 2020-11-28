const { async } = require('validate.js')
const Comments = require('../models/Comments')

exports.addComments = async function (payload){
    if( !payload.nickName ){
        let num = '';
        for (let i = 0; i < 4; i++) {
            num += Math.floor(Math.random() * 9 + 1);
        }
        payload.nickName = "游客" + num
    }
    payload.blogId ? payload : payload.blogId = 0
    payload.parentId ? payload : payload.parentId = 0
    payload.commentId? payload : payload.commentId = 0
    payload.commentId? payload : payload.commentId = 0
    payload.replyNickName? payload : payload.replyNickName = ""
    const ins = await Comments.create(payload)
    return ins.toJSON()
}

exports.getCommentByBlogId = async function (id){
    const result = await Comments.findOne({
        where : {
            blogId : id
        }
    })
    return result
}

exports.getCommentNormalAll = async function (){
    const result = await Comments.findAll({
        attributes:['id',"parentId","commentId","nickName","content","createdAt", "replyNickName"],
        where : {
            blogId : 0 ,
        }
    })
    return result
}
