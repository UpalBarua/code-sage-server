const express = require('express')
const courses = require('./data/courses.json')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req, res) => {
  res.json(courses)
})

app.listen(port)
