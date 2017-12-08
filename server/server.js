const express = require('express');
const colors = require('colors');
const app = express();
const controller = require('./controllers/controllers');
const PORT = 3000;
const pg = require('pg');

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(`Pete's memory palace`);
});

const db = {}; // will move database connection to different file but here for testing
const uri ="postgres://jyxryiuv:weNyUiJmPQFoJG-aXqoZFMp_cYNSYdIV@nutty-custard-apple.db.elephantsql.com:5432/jyxryiuv";

// create a pool
var pool = new pg.Pool()

// connection using created pool
pool.connect(function(err, client, done) {
  console.log('connected to postgres db')
  // client.query(/* etc, etc */)
  done()
})

// pool shutdown
// pool.end()


app.listen(PORT, () => console.log(`App listening on port ${PORT}...`.green));