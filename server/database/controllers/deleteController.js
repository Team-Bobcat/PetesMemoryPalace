const db = require('./../models/index');

const dbFuncs = {};

dbFuncs.deletePalace = (req, res, next) => {
  const palace = req.query.palace 
  // console.log("IDDDDD", req.user.id);
  db.Palace.destroy({where: {name: palace, UserId: req.user.id}})
    .then(() =>
      res.status(200).send('destroyed')
    );
}

dbFuncs.deleteImg = (req, res, next) => { 

}

dbFuncs.deleteNodes = (req, res, next) => {

}

module.exports = dbFuncs;
