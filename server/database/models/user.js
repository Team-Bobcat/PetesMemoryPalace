'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  User.associate = function(models) {
        User.hasMany(models.Palace, {
          onDELETE: 'CASCADE' // deletes all of a user's palaces, images, nodes, etc. if a user is deleted
        })
  }
  
  return User;
};