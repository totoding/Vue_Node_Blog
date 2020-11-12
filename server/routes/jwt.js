const jwt = require("jsonwebtoken")
const secrect = "totoding"
const cookieKey = "token"

// 颁发jwt
exports.publish = function (res, maxAge = 3600*24, info = {}){
    const token = jwt.sign(info,secrect,{
        expiresIn: maxAge * 1000
    })
    //添加到cookie
    res.cookie(cookieKey, token, {
        maxAge,
        path : "/"
    }) 
    res.header("authorization",token)
}

exports.verify = function (req){
    let token 
    req.cookies.token ? token = req.cookies[cookieKey] : token = req.headers.authorization
    try {
        return jwt.verify(token, secrect)
    } catch (error) {
        return null
    }

}