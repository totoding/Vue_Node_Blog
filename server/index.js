require("./express")
require("./models/db")


const jwt = require("jsonwebtoken")
const secrect = "totoding"
const token = jwt.sign({},secrect,{
    expiresIn: 3600
})
try{
    const decode = jwt.verify(token,secrect)
}catch{
    console.log("无效")
}
