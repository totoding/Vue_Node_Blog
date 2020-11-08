const express = require('express')
const app = express()
const cors = require("cors")
const port = 80

app.use(require('./routes/api/corsMiddleware'))



app.post("/p",(req,res)=>res.send("nihao"))
app.get('/test', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`服务器开启`))