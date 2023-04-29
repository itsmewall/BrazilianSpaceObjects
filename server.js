const http = require('http')
const port = process.env.PORT || 3000
const express = require('express')

const app = express()
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
})

app.get('/dados', (req, res) => {
  fs.readFile('objects.JSON', 'utf8', (err, data) => {
    if (err) throw err
    res.send(data)
  })
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
