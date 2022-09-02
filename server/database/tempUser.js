const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: 'tempUser',
    tableName: 'tempUsers',
    timestamps: false
  }
  class tempUser extends Model {
    static associate () { }
  }
  tempUser.init({
    tempUserId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    tempUserName: { type: DataTypes.TEXT },
    tempUserVerificationKey: { type: DataTypes.TEXT },
    tempUserPasswordHash: { type: DataTypes.TEXT },
    tempUserPasswordSalt: { type: DataTypes.TEXT }
  }, options)
  return tempUser
}
