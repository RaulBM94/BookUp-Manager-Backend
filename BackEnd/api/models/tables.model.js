const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    capacity:{
        type:Number,
        required: true
    },
    status:{
        type:String,
        enum:['free', 'occupied','booked']
    }
})


module.exports = tableSchema