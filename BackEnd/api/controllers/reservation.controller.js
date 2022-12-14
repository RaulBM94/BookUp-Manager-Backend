const ReservationModel= require('../models/reservation.model')
const {handleError}=require('../utils')

function getAllReservationsByQuery (req, res) {
    console.log(req.params.search)
    ReservationModel
        .find({date:req.params.search.date, shift:req.params.search.shift})
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function createReservation (req,res) {
    console.log(req.body)
    ReservationModel
    .create(req.body)
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
}

function updateReservation (req,res){
    ReservationModel
    .findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err,res))
}

function deleteReservation (req,res){
    ReservationModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err,res))
}

module.exports={
    getAllReservationsByQuery,
    createReservation,
    updateReservation,
    deleteReservation
}