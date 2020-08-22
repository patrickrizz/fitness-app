'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class excercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  excercise.init({
    excercise: DataTypes.STRING,
    muscle: DataTypes.STRING,
    type_of_excercise: DataTypes.STRING,
    equipment: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'excercise',
  });
  return excercise;
};