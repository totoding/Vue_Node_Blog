const jwt = require("jsonwebtoken")
const secrect = "totoding"
const cookieKey = "token"

// 颁发jwt
exports.publish = function (maxAge = 3600*24, info = {}){
    const token = jwt.sign(info,secrect,{
        expiresIn: maxAge
    })
    //添加到cookie
    res.cookie(cookieKey, token, {
        maxAge,
        path : "/",
    }) 
    res.header("authorization",token)
}