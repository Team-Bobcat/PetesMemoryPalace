const db = require('./../models/index');

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
  const email1 = id.emails;
  // console.log('our email: ', email1);
  // const displayName = req.query.displayName;
  db.User.findOne({where: {email: email1}})
    .then(user => {
      // console.log('this: ', user);
      if (user) cb(null, user);
      else cb(void 0);
    })
}


module.exports = dbFuncs;
