const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  direction: {
    type: String,
    required: [true, 'Direction is required']
  },
  openingHours: {
    type: String,
    enum:['12:00-22:00', '12:00-16:00']
  },
  kitchenHours: {
    type: String,
    enum:['12:00-21:00', '12:00-15:00']
  },
  waiters:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
  },
  tables: [tableSchema]
})

const userModel = mongoose.model('restaurant', userSchema)
module.exports = userModel
