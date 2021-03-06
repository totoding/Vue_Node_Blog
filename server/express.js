const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(require('./routes/corsMiddleware'))
app.use(require("./routes/tokenMiddleware"))
app.use("/api/whoami",require("./routes/api/who"))
app.use("/api/register",require("./routes/api/register"))
app.use("/api/login",require("./routes/api/login"))
app.use("/api/article", require('./routes/api/article'))
app.use("/api/comments", require('./routes/api/comments'))


app.listen(port, () => console.log(`服务器开启`))