const mongoose= require('mongoose')

const reservationSchema = new mongoose.Schema({
    date:{
        type:Date,
    },
    shift:{
        type: String,
        enum: ['Mañana', 'Tarde','Noche'],
    },
    hour:{
        type:String,
    },
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'restaurant',
    },
    customer_name:{
        type: String
    },
    customer_phone:{
        type: Number
    },
    customer_email:{
        type:String
    },
    people:{
        type: Number,
        default: 1
    },
    notes:{
        type: String
    },
    confirmed:{
        type: Boolean,
        default: false
    }
})

const reservationModel = mongoose.model('reservation', reservationSchema)
module.exports = reservationModel