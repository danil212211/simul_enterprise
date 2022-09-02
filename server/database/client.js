const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: 'Client',
    tableName: 'Clients',
    timestamps: false
  }
  class Client extends Model {
    static associate () { }
  }
  Client.init({
    clientId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    clientName: { type: DataTypes.TEXT }
  }, options)
  return Client
}
