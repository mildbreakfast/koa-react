'use strict'

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  cache: true,
  context: process.cwd(),
  debug: true,
  devtool: 'source-map',
  entry: {
    'vendor': ['react', 'react-dom'],
    'app': ['webpack-hot-middleware/client?path=http://localhost:3000','./client/app.js']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: ['node_modules', 'bower_components'],
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: ['node_modules', 'bower_components'],
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
      }
    ]
  },
  postcss: () => [autoprefixer],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    moduleDirectories: ['node_modules', 'bower_components']
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendor']
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false} }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};