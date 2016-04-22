'use strict'

const koa = require('koa');
const app = koa();

if(process.env.NODE_ENV != 'production') {
  const webpack = require('webpack');
  const koaDevMiddleware = require('koa-webpack-dev-middleware');
  const koaHotMiddleware = require('koa-webpack-hot-middleware');
  const webpackConfig = require('./webpack.config');
  app.use(koaDevMiddleware(webpack(webpackConfig), { noInfo: true, hot: true, historyApiFallback: true, publicPath: webpackConfig.output.publicPath }));
  app.use(koaHotMiddleware(webpack(webpackConfig)));
}

app.listen(3000);
