'use strict';
module.exports = (sequelize, DataTypes) => {
  var Palace = sequelize.define('Palace', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING
  });
    
  Palace.associate = function(models) {
        Palace.hasMany(models.Image, {
	        onDelete: 'CASCADE'
        });
        Palace.belongsTo(models.User, {
          onDelete: 'CASCADE'
        });
  }
    
  return Palace;
};