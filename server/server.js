require('dotenv').config()
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

// create a pool
const pool = new pg.Pool({
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_DB}`,
  password: `${process.env.DB_PASSWORD}`,
  port: 5432,
})

// connection using created pool
pool.connect(function(err, client, done) {
  console.log('connected to postgres db'.blue)
  // client.query(/* etc, etc */)
  done()
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})


app.listen(PORT, () => console.log(`App listening on port ${PORT}...`.green));