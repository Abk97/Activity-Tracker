const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/users", "/activities"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
