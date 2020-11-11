const express = require('express')
const app = express()
const port = 80

app.use(require('./routes/corsMiddleware'))
app.use("/api/register",require("./routes/api/register"))




app.listen(port, () => console.log(`服务器开启`))