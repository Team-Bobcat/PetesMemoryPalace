const models = require('./../models/index');

const dbFuncs = {};

dbFuncs.newUser = (req, res, next) => {
  
}

dbFuncs.newPalace = (req, res, next) => {
  res.send(200);
  console.log('creating palace');
  models.Palace.create({name: "Beach House"});
  res.send("Created palace", 200);
}

dbFuncs.newImage = (req, res, next) => {
  
}

dbFuncs.storeMemory = (req, res, next) => {

}

module.exports = dbFuncs;