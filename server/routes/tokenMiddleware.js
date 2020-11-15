const { getErr } = require("./getSendResult");
const { pathToRegexp } = require("path-to-regexp");
const jwt = require("./jwt");
const needTokenApi = [
  { method: "GET", path: "/api/whoami" },
];

// 用于解析token
module.exports = (req, res, next) => {
 
  const apis = needTokenApi.filter((api) => {
    const reg = pathToRegexp(api.path);
    return api.method === req.method && reg.test(req.path);
  });

  if (apis.length === 0) {
    next();
    return;
  }
  const result = jwt.verify(req);
  console.log(result)
  if (result) {
    //认证通过
    console.log(result)
    req.userId = result.id;
    next();
  } else {
    //认证失败
    handleNonToken(req, res, next);
  }
};

//处理没有认证的情况
function handleNonToken(req, res, next) {
  res
    .status(403)
    .send(getErr("you dont have any token to access the api", 403));
}
