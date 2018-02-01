const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean-plugin')
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: ['react-hot-loader/patch', './src/index.js', hotMiddlewareScript],
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: [resolve('src')]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    new WebpackCleanPlugin(resolve('dist')),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    }),

    // HMR plugins
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}