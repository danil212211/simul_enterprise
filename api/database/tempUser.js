const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: 'UserVerification',
    tableName: 'UserVerifications',
    timestamps: false
  }
  class UserVerification extends Model {
    static associate () { }
  }
  UserVerification.init({
    userVerificationId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    userId: { type: DataTypes.BIGINT },
    userVerificationKey: { type: DataTypes.TEXT }
  }, options)
  return UserVerification
}
