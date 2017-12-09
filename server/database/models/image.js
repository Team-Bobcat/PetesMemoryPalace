'use strict';
module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define('Image', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    img: DataTypes.BLOB
  }); 
    
  Image.associate = function(models) {
        Image.hasMany(models.Node, {
	        onDelete: 'CASCADE'
        });
        Image.belongsTo(models.Palace, {
          onDelete: 'CASCADE'
        });
  };
  
  return Image;
};