const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'restaurant',
    },
    identification:{
        type:String,
    },
    capacity:{
        type:Number,
        required: true
    }
})

const tableModel = mongoose.model('table', tableSchema)
module.exports = tableModel