const User = require("../models/User")
const md5 = require("md5")
exports.addUser = async function(userInfo){
    userInfo.password = md5(userInfo.password)
    userInfo.type ? userInfo.type : userInfo.type = 0
    console.log(userInfo)
    const ins = await User.create(userInfo)
    console.log(ins.toJSON())
    return ins.toJSON()
}
