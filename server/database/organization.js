const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: 'Organization',
    tableName: 'Organizations',
    timestamps: false
  }
  class Organization extends Model {
    static associate () { }
  }
  Organization.init({
    organizationId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    organizationName: { type: DataTypes.TEXT },
    organizationStatus: { type: DataTypes.TEXT }
  }, options)
  return Organization
}
