const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

module.exports = {
  mode: "development",

  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.resolve(__dirname, dir)
    const entry = path.resolve(fullDir, 'app.ts')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  },{}),

  output: {
    path: path.resolve(__dirname, "__build__"),
    publicPath: "/__build__/",
    filename: "[name].js"
  },

  module: {
    rules: [{
      test: /\.ts$/,
      enforce: "pre",
      loader: "tslint-loader"
    }, {
      test: /\.tsx?$/,
      options: {
        transpileOnly: true
      },
      loader: "ts-loader"
    }]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
