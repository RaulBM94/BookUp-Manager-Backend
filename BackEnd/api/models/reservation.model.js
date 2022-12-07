const mongoose= require('mongoose')

const reservationSchema = new mongoose.Schema({
    date:{
        type:Date,
    },
    shift:{
        type: String,
        enum: ['morning', 'afternoon','evening'],
    },
    hour:{
        type:String,
    },
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'restaurant',
    },
    table_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'table',
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
        type: Number
    },
    notes:{
        type: String
    }
})