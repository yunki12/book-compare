const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://35.222.95.13:8000",
            changeOrigin: true,
            secure: false, // HTTPS 검증 무시 (Mixed Content 회피)
        })
    );
};