const mongoose = require('mongoose')
const CatergorySchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Catergory', CatergorySchema)
