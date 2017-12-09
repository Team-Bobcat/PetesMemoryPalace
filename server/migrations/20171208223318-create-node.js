'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Nodes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      nodeNum: {
        type: Sequelize.INTERGER
      },
      locX: {
        type: Sequelize.STRING
      },
      locY: {
        type: Sequelize.STRING
      },
      dateDescription: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      monthWord: {
        type: Sequelize.STRING
      },
      dayWord: {
        type: Sequelize.STRING
      },
      baseYearWord: {
        type: Sequelize.STRING
      },
      endYearWord: {
        type: Sequelize.STRING
      },
      monthImg: {
        type: Sequelize.STRING
      },
      dayImg: {
        type: Sequelize.STRING
      },
      baseYearImg: {
        type: Sequelize.STRING
      },
      endYearImg: {
        type: Sequelize.STRING
      },
      monthImgArray: {
        type: Sequelize.ARRAY
      },
      dayImgArray: {
        type: Sequelize.ARRAY
      },
      baseYearImgArray: {
        type: Sequelize.ARRAY
      },
      endYearImgArray: {
        type: Sequelize.ARRAY
      },
      ConSTRINGId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Images',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Nodes');
  }
};