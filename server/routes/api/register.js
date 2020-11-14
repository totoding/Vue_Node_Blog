const express = require("express")
const router = express.Router()
const userServ = require("../../services/userService")
const { asyncHandler } = require("../getSendResult")

router.post('/', asyncHandler(async (req, res) => {
    console.log(23)
    const isRepeat = await userServ.checkUser(req.query.username)
    if (isRepeat) {
        const result = await userServ.addUser(req.query)
        res.send(result)
    } else {
        res.send("重复了")
    }
}))

module.exports = router