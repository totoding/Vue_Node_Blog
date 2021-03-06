const express = require("express")
const router = express.Router()
const { asyncHandler } = require("../getSendResult")
const userServ = require("../../services/userService")
const jwt = require('../jwt')
router.post("/", asyncHandler(async (req, res) => {
    console.log(req.params)
    const result = await userServ.login(req.body)
    if (result) {
        jwt.publish(res, undefined, { id: result.id })
    }
    return result
}))

module.exports = router