const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const compiler = webpack(webpackConfig)
const port = process.env.PORT || 8080

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/__build__/",
  stats: {
    color: true,
    chunk: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

module.exports = app.listen(port, () => {
  console.log(`Examples demonstrate at http://localhost:${port}`)
})

