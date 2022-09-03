const router = require('express').Router()
const User = require('../Models/User')
const bcrypt = require('bcrypt')
const post = require('../Models/Post')

router.put('/:id', async (req, res) => {
  if (req.body.id === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSaltSync(10)
      req.body.password = bcrypt.hash(req.body.password, salt)
    }
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      })
      res.status(200).json(updateUser)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(401).json('you can only update your account')
  }
})

router.delete('/:id', async (req, res) => {
  if (req.body.id === req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      try {
        await post.deleteMany({ username: user.username })
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user been deleted')
      } catch (err) {
        res.status(500).json(err)
      }
    } catch (err) {
      res.status(404).json('user not found')
    }
  } else {
    res.status(401).json('not your account')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id)
    res.status(200).json(getUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
