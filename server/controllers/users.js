const bcrypt = require('bcrypt')

const { User } = require('../database')

function createUser (name, passwordSalt, passwordHash) {
  const newUser = User.build({
    name,
    passwordHash,
    passwordSalt
  })
  return newUser.save()
}
async function loginUser (name, password) {
  const user = await User.findOne({ where: { userName: name } })
  if (user) {
    const loginHash = await bcrypt.hash(password, user.userPasswordSalt)
    if (loginHash === user.userPasswordHash) {
      return user
    }
  }
  return null
}
async function getUsers () {
  return await User.findAll()
}
module.exports = {
  createUser,
  loginUser,
  getUsers
}
