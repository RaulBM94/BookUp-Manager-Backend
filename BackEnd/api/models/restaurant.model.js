const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  restaurant_name: {
    type: String,
  },
  direction: {
    type: String,
    required: [true, 'Direction is required']
  },
  has_breakfast: {
    type: Boolean
  },
  has_lunch: {
    type: Boolean
  },
  has_dinner: {
    type: Boolean
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  num_tables: {
    type: Number,
    default: 1
  }
})

const restaurantModel = mongoose.model('restaurant', restaurantSchema)
module.exports = restaurantModel
