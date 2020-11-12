const express = require("express")
const router = express.Router()
const {asyncHandler} = require("../getSendResult")
const userServ = require("../../services/userService")
const jwt  =  require('../jwt')
router.post("/", asyncHandler(async(req, res)=>{
 
    const result = await userServ.login(req.body)
    console.log(result)
    if(result){
        jwt.publish(res)
    }
    return {
        name : result.username
    }
}))

module.exports = router