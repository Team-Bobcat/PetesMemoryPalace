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

dbFuncs.searchForUser = (id, cb) => {
  const email = id.emails;
  // const displayName = req.query.displayName;
  db.User.findOne({where: {email: email}})
    .then(user => {
      if (user !== null) cb(user);
      else cb(void 0);
    })
}


module.exports = dbFuncs;
