const bcrypt = require('bcrypt')
const config = require('../config')
const { tempUser } = require('../database')

async function createTempUser (userName, userPassword) {
  const passwordSalt = await bcrypt.genSalt(config.salt_rounds)
  const verificationKey = await bcrypt.genSalt(config.salt_rounds)
  const passwordHash = await bcrypt.hash(userPassword, passwordSalt)
  const newTempUser = tempUser.build({
    name,
    verificationKey,
    passwordHash,
    passwordSalt
  })
  return newTempUser.save()
}

module.exports = {
  createTempUser
}
