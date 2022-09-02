const http = require('http')
const { Server } = require('socket.io')
const app = require('./app')

const server = http.createServer(app)
const io = new Server(server)

app.set('io', io)

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
module.exports = app
