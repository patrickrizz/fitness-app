'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CreateRoles', [{
        id: '1',
        role: 'member',
        role_description: 'Limited access (free)',
        createdAt: '2000-01-01 00:00:00',
        updatedAt: '2000-01-01 00:00:00'
      },
      {
        id: '2',
        role: 'premiumMember',
        role_description: 'Full access (paid)',
        createdAt: '2000-01-01 00:00:00',
        updatedAt: '2000-01-01 00:00:00'
      },
      {
        id: '3',
        role: 'trainer',
        role_description: 'Full access (paid), has access to additional features such as seeing trainee workouts and logs',
        createdAt: '2000-01-01 00:00:00',
        updatedAt: '2000-01-01 00:00:00'
      },
      {
        id: '4',
        role: 'gym',
        role_description: 'Full access (paid), has access to all trainer features and includes a few helpful features to manage trainers',
        createdAt: '2000-01-01 00:00:00',
        updatedAt: '2000-01-01 00:00:00'
      },
      {
        id: '5',
        role: 'employee',
        role_description: 'Has rights to cms for updating specific databases',
        createdAt: '2000-01-01 00:00:00',
        updatedAt: '2000-01-01 00:00:00'
      },
      {
        id: '6',
        role: 'admin',
        role_description: 'Full access to everything in cms',
        createdAt: '2000-01-01 00:00:00',
        updatedAt: '2000-01-01 00:00:00'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CreateRoles', null, {});
  }
};