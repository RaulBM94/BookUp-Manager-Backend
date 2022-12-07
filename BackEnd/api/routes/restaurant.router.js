const router = require('express').Router()

const{
    authUser
} = require('../utils') // Authenticated Route

const {
    createRestaurant,
    deleteRestaurant,
    updateRestaurant
} = require('../controllers/restaurant.controller')

router.post('/', authUser, createRestaurant)
router.put('/:id', authUser, updateRestaurant)
router.delete('/:id', authUser, deleteRestaurant)

module.exports = router
