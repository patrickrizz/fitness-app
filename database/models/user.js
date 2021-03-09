'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     User.hasOne(models.ExperienceLevel, {foreignKey: 'user_id'})
     User.hasOne(models.Objective, {foreignKey: 'user_id'})
     User.hasOne(models.Strategy, {foreignKey: 'user_id'})
     User.hasOne(models.UserStats, {foreignKey: 'user_id'})
     User.hasOne(models.Role, {foreignKey: 'user_id'})
     User.hasOne(models.Workout, {foreignKey: 'user_id'})
    }
  };
  User.init({
    google_id: {
      unique: true,
      type: DataTypes.STRING
    },
    facebook_id: {
      unique: true,
      type: DataTypes.STRING
    },
    email: {
      unique: true,
      type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    setup: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};