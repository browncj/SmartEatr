var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.jsx',
  output: {path: __dirname, filename: 'bundle.js'},
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './components',
      './containers'
    ],
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
