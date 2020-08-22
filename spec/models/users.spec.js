module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    google_id: 'randomGoogleId',
    facebook_id: 'randomFBId',
    email: 'jondoe@test.com',
    password: 'pass123',
    first_name: 'jon',
    last_name: 'doe'
  }, {
    timestamp: false
})

Users.associate = function(models) {
  Users.hasOne(models.Bodytype, {foreignKey: 'user_id'})
  Users.hasOne(models.DietStrategies, {foreignKey: 'user_id'})
  Users.hasOne(models.Goals, {foreignKey: 'user_id'})
  Users.hasOne(models.Preferences, {foreignKey: 'user_id'})
  Users.hasOne(models.Roles, {foreignKey: 'user_id'})
  Users.hasOne(models.UserStats, {foreignKey: 'user_id'})
}

return Users
}