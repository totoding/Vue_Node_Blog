const express = require("express")
const { async } = require("validate.js")
const router = express.Router()
const articleServ = require("../../services/articleService")
const { asyncHandler } = require("../getSendResult")

router.post("/", asyncHandler(async(req,res)=>{
    return await articleServ.addArticle(req.body)
}))

router.get("/:id",asyncHandler(async(req,res)=>{
    if(req.params){
        return await articleServ.getArticleById(req.params.id)
    }
}))
router.get("/", asyncHandler(async(req, res)=>{
  
    const query = req.query
    console.log(query)
    return  query.type ? await articleServ.getArticleTitleByFilter(query) : await articleServ.getArticleTitle() 
}))

router.delete("/:id", asyncHandler(async(req,res)=>{

    return await articleServ.removeArticle(req.params.id)
}))
module.exports = router 