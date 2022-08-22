const { Router } = require('express')
// eslint-disable-next-line no-unused-vars
const { User } = require('../../database/index')
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET user listing. */
router.get('/', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
