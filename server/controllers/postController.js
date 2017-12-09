const db = require('./../models/index');

const dbFuncs = {};

dbFuncs.newUser = (req, res, next) => {
  const email = req.query.email;
  const displayName = req.query.displayName;
  db.User.create({email: email, displayName: displayName});
  res.status(200).send("user created successfully");
}

dbFuncs.newPalace = (req, res, next) => {

}

dbFuncs.newImage = (req, res, next) => {

}

dbFuncs.storeMemory = (req, res, next) => {

}

module.exports = dbFuncs;