var path = require('path');
var webpack = require('webpack');

// If the environment variable exists, keep it; otherwise set it to 'development'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './index.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       warnings: false
  //     }
  //   })
  // ],
  output: {path: __dirname, filename: './public/bundle.js'},
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './components',
      './containers',
      './actions',
      './reducers'
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
