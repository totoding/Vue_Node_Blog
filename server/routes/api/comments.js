const express = require("express")
const { async } = require("validate.js")
const router = express.Router()
const commentsService = require("../../services/commentsService")
const { asyncHandler } = require("../getSendResult")

router.post("/", asyncHandler(async(req,res)=>{
    return await commentsService.addComments(req.body)
}))
router.get("/:type", asyncHandler(async(req,res)=>{
    console.log(req.query)
    console.log(req.params)
    if(req.params.type == "normal"){
        return await commentsService.getCommentNormalAll()
    }
    if(req.params.type == "blogComments"){
        return await commentsService.getCommentByBlogId(req.query.blogId)
    }
}))


module.exports = router