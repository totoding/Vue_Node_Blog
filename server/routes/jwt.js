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

exports.verify = function (req) {
    let token = req.headers.authorization
    if (!token) {
      //没有token
      return null
    }
    // authorization: bearer token
    token = token.split(" ")
    token = token.length === 1 ? token[0] : token[1]
    try {
      const result = jwt.verify(token, secrect)
      return result
    } catch (err) {
      return null
    }
  };
  