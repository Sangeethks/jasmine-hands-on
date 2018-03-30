const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      } // .js
    ] // rules
  }, // module
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'development'
      }
    })
  ]
}
