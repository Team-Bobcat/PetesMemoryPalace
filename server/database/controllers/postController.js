const db = require('./../models/index');

const dbFuncs = {};

dbFuncs.newUser = (userEmail, name, cb) => {
  const email = userEmail;
  const displayName = name;
  const user = {email: email, displayName: displayName};
  db.User.create(user)
    .then((data) => {
      // userIdVal = data.dataValues.id; // actually just access by req.user.id
      // res.cookie('userId', userIdVal);
      // console.log("check" + req.cookie.userId);
      // console.log('Id ' + userId)
      cb(data)
    });
}

dbFuncs.newPalace = (req, res, next) => {
  console.log("IDDDDD");
  
  console.log("IDDDDD", req.user);
  db.Palace.create({userID: 12, name: "Beach House"})
    .then(() =>
      res.status(200).send('success')
    );
}

dbFuncs.newImage = (req, res, next) => {

}

dbFuncs.storeMemory = (req, res, next) => {

}

module.exports = dbFuncs;