const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://34.133.33.77:8000",
            changeOrigin: true,
            secure: false, // HTTPS 검증 무시 (Mixed Content 회피)
        })
    );
};