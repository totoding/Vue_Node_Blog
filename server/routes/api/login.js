const express = require("express")
const router = express.Router()
const { asyncHandler } = require("../getSendResult")
const userServ = require("../../services/userService")
const jwt = require('../jwt')
router.post("/", asyncHandler(async (req, res) => {
    const result = await userServ.login(req.body)
    if (result) {
        jwt.publish(res, undefined, { id: result.id })
    }
    return {
        name: result.username
    }
}))

module.exports = router