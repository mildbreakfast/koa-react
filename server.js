'use strict'

const koa = require('koa');
const helmet = require('koa-helmet');
const hbs = require('koa-hbs');
const router = require('koa-router')();
const mount = require('koa-mount');
const serve = require('koa-static');

const app = koa();

if(process.env.NODE_ENV != 'production') {
  const logger = require('koa-logger')();
  const webpack = require('webpack');
  const koaDevMiddleware = require('koa-webpack-dev-middleware');
  const koaHotMiddleware = require('koa-webpack-hot-middleware');
  const config = require('./webpack.config');
  const compiler = webpack(config);
  app.use(koaDevMiddleware(compiler, { noInfo: true, hot: true, historyApiFallback: true, stats: { colors: true }, publicPath: config.output.publicPath }));
  app.use(koaHotMiddleware(compiler, { log: console.log }));
  app.use(logger);
}

router.get('/', function *() {
  yield this.render('main', {title: 'koa-test'});
});

app.use(helmet());
app.use(mount('/assets/', serve('dist/')));
app.use(hbs.middleware({
  viewPath: __dirname + '/server/views',
  layoutsPath: __dirname + '/server/views/layouts',
  extname: '.html',
  defaultLayout: 'default'
}));
app.use(router.routes());


app.listen(3000);
