'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExperienceLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ExperienceLevel.init({
    user_id: DataTypes.STRING,
    xp_level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ExperienceLevel',
  });
  return ExperienceLevel;
};