const router = require('express').Router()
const User = require('../Models/User')
const bcrypt = require('bcrypt')

// Register
router.post('/REGISTER', async (req, res) => {
  try {
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash
    })
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    !user && res.status(400).json('wrong credentials')
    const validate = await bcrypt.compare(req.body.password, user.password)
    !validate && res.status(400).json('wrong credentials')
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router
