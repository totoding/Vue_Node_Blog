const express = require("express")
const router = express.Router()
const userServ = require("../../services/userService")
const { asyncHandler } = require("../getSendResult")

router.post('/',asyncHandler(async (req, res) => {
    const isRepeat = await userServ.checkUser(req.body.username)
    if (isRepeat) {
        return  await userServ.addUser(req.body)
    } else {
        return ""
    }
})) 

module.exports = router