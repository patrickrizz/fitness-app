'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CreateExercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exercise: {
        type: Sequelize.STRING,
        allowNull: false
      },
      muscle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type_of_exercise: {
        type: Sequelize.STRING,
        allowNull: false
      },
      equipment: {
        type: Sequelize.BOOLEAN
      },
      exercise_description: {
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
    await queryInterface.dropTable('CreateExercises');
  }
};