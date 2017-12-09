'use strict';
module.exports = (sequelize, DataTypes) => {
  var Node = sequelize.define('Node', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4
    },
    nodeNum: DataTypes.INTEGER,
    locX: DataTypes.STRING,
    locY: DataTypes.STRING,
    dateDescription: DataTypes.STRING,
    date: {type: DataTypes.DATE, defaultValue: sequelize.NOW},
    monthWord: DataTypes.STRING,
    dayWord: DataTypes.STRING,
    baseYearWord: DataTypes.STRING,
    endYearWord: DataTypes.STRING,
    monthImg: DataTypes.STRING,
    dayImg: DataTypes.STRING,
    baseYearImg: DataTypes.STRING,
    endYearImg: DataTypes.STRING,
    // monthImgArray: DataTypes.ARRAY,
    // dayImgArray: DataTypes.ARRAY,
    // baseYearImgArray: DataTypes.ARRAY,
    // endYearImgArray: DataTypes.ARRAY
  }, {
    classMethods: {
      associate: function(models) {
        Node.belongsTo(models.Image, {
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Node;
};