/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const Sequelize = require('sequelize')

const config = require('../config')

const db = {}
const sequelize = new Sequelize(config.database, config.username, config.password, config)

function getDatabaseRequire (name) {
  return require(name)(sequelize, Sequelize.DataTypes)
}
const User = getDatabaseRequire('./user')
const tempUser = getDatabaseRequire('./tempUser')
const Client = getDatabaseRequire('./client')
const Organization = getDatabaseRequire('./organization')

db[User.name] = User
db[tempUser.name] = tempUser
db[Client.name] = Client

Client.belongsTo(User, {
  foreignKey: 'clientId'
})

Organization.belongsTo(User, {
  foreignKey: 'organizationId'
})

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})
sequelize.sync({ force: true })

db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize.authenticate().then(() => {
  db.connection = 'db.connect'
}).catch((err) => {
  db.connection = err.toString()
})

module.exports = db
