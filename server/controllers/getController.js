const db = require('./../models/models');

const dbFuncs = {};

dbFuncs.getPalaces = (req, res, next) => {
  
}  

dbFuncs.getImg = (req, res, next) => {
  const results = [];

  const id = req.params.id; // change accordingly

  const query = db.conn.query(`SELECT * FROM ____ WHERE id = '${id}`, (err, result) => {
    if (err) console.log("ERR ", err);
  });

  query.on('row', row => {
    if (row.____ === parseInt(id)) results.push(row); // change accordingly 
  });

  query.on('end', () => {
    if (results.length === 0) res.send('not found id', 404);
    else res.json(results);
    next();
  });
}

dbFuncs.getNodes = (req, res, next) => {

}
