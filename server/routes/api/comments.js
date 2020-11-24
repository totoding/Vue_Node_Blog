const express = require("express")
const { async } = require("validate.js")
const router = express.Router()
const commentsService = require("../../services/commentsService")
const { asyncHandler } = require("../getSendResult")

router.post("/", asyncHandler(async(req,res)=>{
    return await commentsService.addComments(req.body)
}))
router.get("/", asyncHandler(async(req,res)=>{
    // return await commentsService.addComments(req.body)
    console.log(req.query)
}))


module.exports = router