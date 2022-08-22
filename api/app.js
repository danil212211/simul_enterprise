const express = require('express')
const { routeV1 } = require('./routes')

const app = express()

app.use(routeV1)

module.exports = app
