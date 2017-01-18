/**
 * Created by huangying on 2017/1/18.
 */
var Webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080')
var compiler = new Webpack(config)
var server = new WebpackDevServer(compiler, {

    //代理
    proxy: {
        '/api/**': {
            target: 'http://localhost:8080',
            secure: false
        }
    },
    //控制台日志级别[error, warning, info, none]
    clientLogLevel: "info",
    //给控制台一个颜色
    stats: {colors: true}
})
server.listen(8080)