var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
	publicPath: 'http://localhost:8080/',
	index: 'index.html'
}))

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

app.listen(8080, function() {
	console.log("listening on port 8080");
})
