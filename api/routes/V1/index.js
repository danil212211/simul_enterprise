const express = require('express')

const routing = express()

const user = require('./users')

routing.use('/users', user)

module.exports = routing
