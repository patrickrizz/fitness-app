'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CreateStrategies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strategy: {
        type: Sequelize.STRING,
        allowNull: false
      },
      xp_level: {
        type: Sequelize.STRING,
        allowNull: false
      },
      strategy_description: {
        type: Sequelize.TEXT
      },
      strategy_map: {
        type: Sequelize.TEXT,
        allowNull: false
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
    await queryInterface.dropTable('CreateStrategies');
  }
};