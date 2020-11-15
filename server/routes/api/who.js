const express = require("express")
const router = express.Router()
const userServ = require("../../services/userService")
const { asyncHandler } = require("../getSendResult")
const jwt = require("../jwt")
router.get('/', asyncHandler(async (req, res) => {
    const result =  await userServ.getUserById(req.userId)
    return result
}))


module.exports = router