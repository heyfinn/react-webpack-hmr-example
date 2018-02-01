const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./build/webpack.config')
const compiler = webpack(config)

const app = express()

let port = 3000

// Add middleware
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  serverSideRender: true
}))

// Add hot middleware support
app.use(webpackHotMiddleware(compiler)) // Check [HMR] connected in console

app.listen(port, () => {
  console.log('Listening on port ' + port)
})