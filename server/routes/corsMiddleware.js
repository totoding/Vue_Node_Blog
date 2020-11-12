const allowOrigins = [
    "http://localhost:8080",
    "http://127.0.0.1",
    "http://localhost:52330",
    null
]

module.exports = function (req, res, next) {
    //处理预见请求
    if (req.method == "OPTIONS") {
        res.header(`Access-Control-Allow-Methods`, req.headers['access-control-request-method'])
        res.header("Access-Control-Allow-Headers", req.headers['access-control-request-headers'])
    }

    //处理简单请求
    if ("origin" in req.headers && allowOrigins.includes(req.headers.origin)) {
        res.header("Access-Control-Allow-Origin", req.headers.origin)
    }
    res.header("Access-Control-Allow-Credentials", true)
    next()
}