'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CreateRole.init({
    role: DataTypes.STRING,
    role_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CreateRole',
  });
  return CreateRole;
};