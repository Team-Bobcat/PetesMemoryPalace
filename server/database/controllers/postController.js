const db = require('./../models/index');

const dbFuncs = {};

dbFuncs.newUser = (userEmail, name, cb) => {
  const email = userEmail;
  const displayName = name;
  const user = {email: email, displayName: displayName};
  db.User.create(user)
    .then(cb(user));
}

dbFuncs.newPalace = (req, res, next) => {

}

dbFuncs.newImage = (req, res, next) => {

}

dbFuncs.storeMemory = (req, res, next) => {

}

module.exports = dbFuncs;