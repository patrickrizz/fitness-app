'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        id: '000000000000000000001',
        first_name: 'John',
        last_name: 'Doe',
        email: 'demo@demo.com',
        setup: false,
        createdAt: '2000-01-01 00:00:00',
        updatedAt: '2000-01-01 00:00:00'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};