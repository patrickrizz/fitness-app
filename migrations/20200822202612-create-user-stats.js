'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.FLOAT
      },
      bmi: {
        type: Sequelize.FLOAT
      },
      body_fat: {
        type: Sequelize.FLOAT
      },
      fat_free_weight: {
        type: Sequelize.FLOAT
      },
      subcutaneous_fat: {
        type: Sequelize.FLOAT
      },
      visceral_fat: {
        type: Sequelize.FLOAT
      },
      body_water: {
        type: Sequelize.FLOAT
      },
      skeletal_muscle: {
        type: Sequelize.FLOAT
      },
      muscle_mass: {
        type: Sequelize.FLOAT
      },
      bone_mass: {
        type: Sequelize.FLOAT
      },
      protein: {
        type: Sequelize.FLOAT
      },
      bmr: {
        type: Sequelize.FLOAT
      },
      metabolic_age: {
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
    await queryInterface.dropTable('UserStats');
  }
};