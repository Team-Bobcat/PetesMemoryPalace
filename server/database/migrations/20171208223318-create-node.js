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
      locX: {
        type: Sequelize.STRING
      },
      locY: {
        type: Sequelize.STRING
      },
      dateDescription: {
        type: Sequelize.STRING
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
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      dayImgArray: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      baseYearImgArray: {
        type: Sequelize.ARRAY(Sequelize.STRING) 
      },
      endYearImgArray: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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