const express = require('express')
const app = express()

app.use('/main', (req, res) => {
  console.log('hello lasean')
})

app.listen(7000, () => {
  console.log('app listening')
})
/* const express = require('express')
const app = express()

app.use('/home', (req, res) => {
  console.log('this is the main url')
})

app.listen('7000', () => {
  console.log('backend is running')
}) */
