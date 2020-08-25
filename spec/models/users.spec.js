module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    google_id: 'randomGoogleId',
    facebook_id: 'randomFBId',
    email: 'jondoe@test.com',
    password: 'pass123',
    first_name: 'jon',
    last_name: 'doe'
  }, {
    timestamp: false
})

User.associate = function(models) {
  User.hasOne(models.Bodytype, {foreignKey: 'user_id'})
  User.hasOne(models.DietStrategies, {foreignKey: 'user_id'})
  User.hasOne(models.Goals, {foreignKey: 'user_id'})
  User.hasOne(models.Preferences, {foreignKey: 'user_id'})
  User.hasOne(models.Roles, {foreignKey: 'user_id'})
  User.hasOne(models.UserStats, {foreignKey: 'user_id'})
}

return User
}