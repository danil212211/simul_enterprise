const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: 'Todo',
    tableName: 'todo',
    timestamps: true,
    underscored: true
  }
  class User extends Model {
    static associate() { }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
  }, options)
  return User
}
