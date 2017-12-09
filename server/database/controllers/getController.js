const models = require('./../models/index');

const dbFuncs = {};

dbFuncs.getPalaces = (req, res, next) => {
  console.log('getting palaces');
  models.Palace.findAll().then(palaces => {
    console.log(palaces);
    res.send(palaces, 200);
  })
}  

dbFuncs.getImg = (req, res, next) => { 

}

dbFuncs.getNodes = (req, res, next) => {

}

module.exports = dbFuncs;
