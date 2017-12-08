const Sequelize = require('sequelize');

module.exports = function() {
  const app = this;
  const sequelize = app.get('sequelize');

  const Palace = sequelize.define('Palace', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate () {
        const models = app.get('models');
        Palace.hasMany(models['Image']);
      }
    }
  });

  return Palace;
};