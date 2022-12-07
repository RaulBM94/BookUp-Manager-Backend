const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
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
  owner_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
  }
})

const restaurantModel = mongoose.model('restaurant', restaurantSchema)
module.exports = restaurantModel
