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

dbFuncs.deleteNode = (req, res, next) => {
  const nodeId = req.query.nodeId 
  // console.log("IDDDDD", req.user.id);
  db.Palace.destroy({where: {id: nodeId}})
    .then(() =>
      res.send('destroyed')
    );
  palaceId = req.cookies.palaceId;
  db.Palace.findAll({where: {PalaceId: palaceId}}).then(nodes => { 
    res.send(nodes);
  })
}

module.exports = dbFuncs;
