// npm i -D http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');  

module.exports = function(app) {
    app.use( 
        createProxyMiddleware("/auth/login", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/auth/join", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/auth/idcheck", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/board/list", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/board/write", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/board/modify", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/board/view", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
};