require('dotenv').config()
const express = require('express');
const colors = require('colors');
const path = require('path');
const pg = require('pg');
// const controller = require('./database/controllers');
const passport = require('passport');
const configAuth = require('../config/auth.js');
const FacebookStrategy = require('passport-facebook');
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');


const SERVER_PORT = process.env.SERVER_PORT || 3000;
const env = process.env.NODE_ENV || 'development';

passport.serializeUser(function (user, done) {
  // console.log(user);
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  // controller.getUser(id, user => {
  //   done(null, user);
  // });
  // (id, user) => {
  //   done(null.user);
  // }
  // console.log(id);
  done(null, false);
});

passport.use(new FacebookStrategy({
  clientID: configAuth.facebookAuth.clientID,
  clientSecret: configAuth.facebookAuth.clientSecret,
  callbackURL: configAuth.facebookAuth.callbackURL, 
  profileFields: ['id', 'name', 'displayName', 'photos', 'emails', 'friends'],
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    // console.log(profile);
    cb(null, profile);
  }
))

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: configAuth.cookieKey,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile','user_friends', 'email'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/auth', (req, res) => {
  console.log(req);
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({});
  }
});

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

// console.log(controller.getController.getPalaces);
// controller.postController.newUser();

app.post('/newUser', controller.postController.newUser);

app.get('/user', controller.getController.searchForUser);


// app.post('/getPalaces', controller.getController.getPalaces)


app.listen(SERVER_PORT, () => console.log(`App listening on port ${SERVER_PORT}...`.yellow));