'use strict'

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  cache: true,
  context: process.cwd(),
  entry: {
    'vendor': ['react', 'react-dom'],
    'app': ['./client/app.js']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
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
			'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendor']
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
    new webpack.NoErrorsPlugin()
  ]
};
