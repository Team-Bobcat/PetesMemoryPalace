const express = require('express');
const colors = require('colors');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send(`Pete's memory palace`);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}...`.green));