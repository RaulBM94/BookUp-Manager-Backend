const router = require('express').Router()

const{
    authUser
} = require('../utils') // Authenticated Route

const {
    getAllReservationsByQuery,
    createReservation,
    updateReservation,
    deleteReservation
} = require('../controllers/reservation.controller')

router.get('/', authUser, getAllReservationsByQuery)
router.post('/', authUser, createReservation)
router.put('/:id', authUser, updateReservation)
router.delete('/:id', authUser, deleteReservation)

module.exports = router

