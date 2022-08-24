const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    unquie: true
  },
  desc: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  catergories: {
    type: Array,
    required: false
  }
})
module.exports = mongoose.model('{Post', PostSchema)
