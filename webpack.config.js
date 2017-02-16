var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        resource: {
          test: /\.js$/,
          exclude: /node_modules/,
        }
      }
    ]
  }
};
