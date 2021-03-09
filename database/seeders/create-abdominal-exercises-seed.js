'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CreateAbdominalExercises', [{
      "id": 1,
      "exercise": "BURPEES",
      "type_of_exercise": "COMPOUND",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 2,
      "exercise": "CRUNCHES",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 3,
      "exercise": "SIT UPS",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 4,
      "exercise": "SIDE PLANK",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 5,
      "exercise": "PLANK",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 6,
      "exercise": "BICYCLE",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 7,
      "exercise": "MOUNTAIN CLIMBER",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 8,
      "exercise": "PRONE WALKOUT",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 9,
      "exercise": "HEEL TOUCHES",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 10,
      "exercise": "V-UP",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "SETH",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 11,
      "exercise": "MED BALL LUNGE WITH TWIST",
      "type_of_exercise": "COMPOUND",
      "equipment": true,
      "exercise_description": "",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 12,
      "exercise": "MED BALL PLANK",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 13,
      "exercise": "MED BALL SLAM",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 14,
      "exercise": "MED BALL TORSO TWIST",
      "type_of_exercise": "ISOLATION",
      "equipment": true,
      "exercise_description": "",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 15,
      "exercise": "RENEGADE ROW",
      "type_of_exercise": "COMPOUND",
      "equipment": true,
      "exercise_description": "",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    },
    {
      "id": 16,
      "exercise": "PLANK UP-DOWN",
      "type_of_exercise": "COMPOUND",
      "equipment": true,
      "exercise_description": "",
      "createdAt": '2000-01-01 00:00:00',
      "updatedAt": '2000-01-01 00:00:00'
    }
    ],
      {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CreateAbdominalExercises', null, {});
  }
};