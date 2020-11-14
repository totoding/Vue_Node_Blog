const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use('./routes/tokenMiddleware.js')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes/corsMiddleware'))
app.use("/api/register",require("./routes/api/register"))
app.use("/api/login",require("./routes/api/login"))


app.listen(port, () => console.log(`服务器开启`))