const Sequelize = require('sequelize');

module.exports = function() {
  const app = this;
  const sequelize = app.get('sequelize');

  const Image = sequelize.define('Image', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate () {
        const models = app.get('models');
        Image.hasMany(models['Node']);
      }
    }
  });

  return Image;
};