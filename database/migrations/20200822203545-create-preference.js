'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING
      },
      liked_excersice_id: {
        type: Sequelize.INTEGER
      },
      liked_workout_id: {
        type: Sequelize.INTEGER
      },
      liked_excercise_strategy_id: {
        type: Sequelize.INTEGER
      },
      disliked_excersic_id: {
        type: Sequelize.INTEGER
      },
      disliked_workout_id: {
        type: Sequelize.INTEGER
      },
      disliked_excercise_strategy_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Preferences');
  }
};