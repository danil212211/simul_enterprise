const { Router } = require('express')
const usersController = require('../../controllers/users')
const router = Router()

router.post('/', async function (req, res, next) {
  if (req.body && req.body.name && req.body.pass) {
    const createdUser = await usersController.createUser(req.body.name, req.body.pass)
    res.status(200).json(createdUser.toJSON())
  }
  res.status(401)
})

router.get('/', async function (req, res, next) {
  const users = await usersController.getUsers()
  res.status(200).json(JSON.stringify(users, null, 2))
})
module.exports = router
