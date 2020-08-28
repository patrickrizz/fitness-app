'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateExcersice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateExcersice.init({
    excersice: DataTypes.STRING,
    muscle: DataTypes.STRING,
    type_of_excersice: DataTypes.STRING,
    equipment: DataTypes.BOOLEAN,
    excersice_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateExcersice',
  });
  return CreateExcersice;
};