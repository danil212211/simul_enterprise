const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false
  }
  class User extends Model {
    static associate () { }
  }
  User.init({
    userId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    userName: { type: DataTypes.TEXT },
    userPasswordHash: { type: DataTypes.TEXT },
    userPasswordSalt: { type: DataTypes.TEXT }
  }, options)
  return User
}
