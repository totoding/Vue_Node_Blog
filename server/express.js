const express = require('express')
const app = express()
const path = require('path');

const port = 9527
app.use(require('./routes/corsMiddleware'))
app.use("/api/register",require("./routes/api/register"))


app.listen(port, () => console.log(`服务器开启`))