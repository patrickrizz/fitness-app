'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserStats.init({
    user_id: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    bmi: DataTypes.FLOAT,
    body_fat: DataTypes.FLOAT,
    fat_free_weight: DataTypes.FLOAT,
    subcutaneous_fat: DataTypes.FLOAT,
    visceral_fat: DataTypes.FLOAT,
    body_water: DataTypes.FLOAT,
    skeletal_muscle: DataTypes.FLOAT,
    muscle_mass: DataTypes.FLOAT,
    bone_mass: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    bmr: DataTypes.FLOAT,
    metabolic_age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserStats',
  });
  return UserStats;
};