const User = require("../models/User")
const md5 = require("md5")
exports.addUser = async function(userInfo){
    userInfo.password = md5(userInfo.password)
    userInfo.type ? userInfo.type : userInfo.type = 0
    const ins = await User.create(userInfo)
    return ins.toJSON()
}
exports.checkUser = async function(userName){
    const result = await User.findAndCountAll({
        where : {
            username : userName
        }
    })
    return result.count > 1 ? false : true
}
