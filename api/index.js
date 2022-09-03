const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const auth = require('./Routes/authjs')
const user = require('./Routes/user')
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(console.log('connected to mongoDB'))
  .catch(err => console.log(err))

app.use('/auth', auth)
app.use('/api/user', user)

app.listen(1000, () => {
  console.log('app listenings')
})
/* const express = require('express')
const app = express()

app.use('/home', (req, res) => {
  console.log('this is the main url')
})

app.listen('7000', () => {
  console.log('backend is running')
}) */
