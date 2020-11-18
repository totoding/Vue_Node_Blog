const User = require("../models/User")
const md5 = require("md5")
const validate = require("validate.js")
const { async } = require("validate.js")
const { password } = require("../models/config")
exports.addUser = async function (userInfo) {
    const rule = {
        // 验证规则
        username: {
            presence: {
                allowEmpty: false
            },
            type: "string"
        },
        password: {
            presence: {
                allowEmpty: false
            },
        }
    }
    validate.validate(userInfo, rule)
    userInfo.password = md5(userInfo.password)
    userInfo.type ? userInfo.type : userInfo.type = 0
    const ins = await User.create(userInfo)
    return ins.toJSON()
}
exports.checkUser = async function (userName) {
    const result = await User.findAndCountAll({
        where: {
            username: userName
        }
    })
    return result.count > 1 ? false : true
}
exports.login = async function (userInfo) {
    let pwd = md5(userInfo.password)
    console.log(userInfo)
    const result = await User.findOne({
        where: {
            username: userInfo.username,
            password: pwd
        }
    })
    console.log(result)
    return result ? result.toJSON() : null
}

exports.getUserById = async function(userId){
    const result = await User.findOne({
        where : {
           id: userId,
        }
    })
    return result ? result.toJSON() : null
}