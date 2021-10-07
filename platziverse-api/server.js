'use strict'

const debug = require('debug')('platziverse:api')
const chalk = require('chalk')
const http = require('http')
const express = require('express')

const api = require('./api')

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)

app.use('/api', api)

server.listen(port, () => {
  debug(`listening in ${chalk.green(`http://localhost:${port}`)}`)
})
