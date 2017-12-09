'use strict';
module.exports = (sequelize, DataTypes) => {
  var Palace = sequelize.define('Palace', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    img: DataTypes.STRING,
    topic: DataTypes.STRING
  });
    
  Palace.associate = function(models) {
        Palace.hasMany(models.Node, {
	        onDelete: 'CASCADE'
        });
        Palace.belongsTo(models.User, {
          onDelete: 'CASCADE'
        });
  }
    
  return Palace;
};