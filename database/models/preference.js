'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Preference.init({
    user_id: DataTypes.STRING,
    liked_excersice_id: DataTypes.INTEGER,
    liked_workout_id: DataTypes.INTEGER,
    liked_excercise_strategy_id: DataTypes.INTEGER,
    disliked_excersic_id: DataTypes.INTEGER,
    disliked_workout_id: DataTypes.INTEGER,
    disliked_excercise_strategy_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Preference',
  });
  return Preference;
};