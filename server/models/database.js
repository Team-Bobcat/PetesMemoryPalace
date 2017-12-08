const pg = require('pg');
const images = require('images');
const nodes = require('nodes'); // nodes are memories on an image
const palaces = require('palaces');
const users = require('users');

const db = {};
const uri ="postgres://jyxryiuv:weNyUiJmPQFoJG-aXqoZFMp_cYNSYdIV@nutty-custard-apple.db.elephantsql.com:5432/jyxryiuv";

pg.connect(uri, (err, db_) => {
  if (err) throw new Error(err);
  db.conn = db_;
  console.log('connected to database');
})

module.exports = db;