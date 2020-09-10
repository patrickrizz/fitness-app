'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CreateStrategies', 'goal', {
      type: Sequelize.STRING,
      after: 'xp_level'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CreateStrategies', 'goal');
  }
};