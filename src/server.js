const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>NodeJS app</h1>')
})

const server = app.listen(3000, function () {
  console.log('NodeJS app listening on port 3000')
})

module.exports = server