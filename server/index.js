require("./express")
require("./models/db")
// require("./models/User")
const userServ =  require("./services/userService")


// userServ.addUser({
//     username : "admin",
//     password : "Hny158405",
//     type : 1
// })

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
