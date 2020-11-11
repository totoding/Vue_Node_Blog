const express = require("express")
const router = express.Router()
const userServ = require("../../services/userService")
router.post('/',async(req,res)=>{
    const isRepeat = await userServ.checkUser(req.query.username)
    if(isRepeat){
        const result =  await userServ.addUser(req.query)
        res.send(result)
    }else{
        res.send("重复了")
    } 
})

module.exports = router