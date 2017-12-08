const Sequelize = require('sequelize');

module.exports = function() {
  const app = this;
  const sequelize = app.get('sequelize');

  const User = sequelize.define('User', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate () {
        const models = app.get('models');
        User.hasMany(models['Palace']);
      }
    }
  });

  return User;
};