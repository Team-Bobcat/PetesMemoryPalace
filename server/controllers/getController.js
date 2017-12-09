const db = require('./../database/models/index');

const dbFuncs = {};

dbFuncs.getPalaces = (req, res, next) => {
  console.log('getting palaces');
  db.Palace.findAll().then(palaces => { // not testing this yet 
    console.log(palaces);
    res.send(palaces, 200);
  })
}  

dbFuncs.getImg = (req, res, next) => { 

}

dbFuncs.getNodes = (req, res, next) => {

}

dbFuncs.searchForUser = (req, res, next) => {
  const email = req.query.email;
  const displayName = req.query.displayName;
  db.User.findOne({where: {email: email}})
    .then(user => {
      if (user == null) res.status(200).send("welcome back!");
      else res.status(200).send(user);
    })
}


module.exports = dbFuncs;
