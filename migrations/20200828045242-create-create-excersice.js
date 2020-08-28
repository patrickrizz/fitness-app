'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CreateExcersices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      excersice: {
        type: Sequelize.STRING
      },
      muscle: {
        type: Sequelize.STRING
      },
      type_of_excersice: {
        type: Sequelize.STRING
      },
      equipment: {
        type: Sequelize.BOOLEAN
      },
      excersice_description: {
        type: Sequelize.TEXT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CreateExcersices');
  }
};