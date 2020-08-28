'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateExperienceLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateExperienceLevel.init({
    xp_level: DataTypes.STRING,
    xp_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateExperienceLevel',
  });
  return CreateExperienceLevel;
};