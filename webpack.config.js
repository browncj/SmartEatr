var path = require('path');
var webpack = require('webpack');

// If the environment variable exists, keep it; otherwise set it to 'development'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './index.jsx',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {path: __dirname, filename: './public/bundle.js'},
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './components',
      './containers'
    ],
    alias: {
      actions: './actions/actions.js',
      reducers: './reducers/reducers.js'
    },
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
