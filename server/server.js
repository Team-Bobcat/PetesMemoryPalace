const express = require('express');
const colors = require('colors');
const path = require('path');
const passport = require('passport');

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const env = process.env.NODE_ENV || 'development';

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  postController.getUser(id, user => {
    done(null, user);
  });
});

const app = express();



app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['profile', 'email'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

if (env === 'development'){
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.config');
  const config = Object.create(webpackConfig);

  config.devtool = 'eval-source-map';
  config.entry = [
    `webpack-hot-middleware/client?path=http://localhost:${SERVER_PORT}/__webpack_hmr`,
    './client/index.js'
  ];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: config.output.filename,
    publicPath: '/',
    stats: { colors: true }
  }));

app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
  }));
} else {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(SERVER_PORT, () => console.log(`App listening on port ${SERVER_PORT}...`.yellow));