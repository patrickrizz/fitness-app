'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateBicepsExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateBicepsExercise.init({
    exercise: DataTypes.STRING,
    type_of_exercise: DataTypes.STRING,
    equipment: DataTypes.BOOLEAN,
    exercise_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateBicepsExercise',
  });
  return CreateBicepsExercise;
};