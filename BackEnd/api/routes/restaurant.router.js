const router = require('express').Router()

const{
    authUser
} = require('../utils') // Authenticated Route

const {
    getMyRestaurant,
    createRestaurant,
    deleteRestaurant,
    updateRestaurant
} = require('../controllers/restaurant.controller')

router.get('/', authUser, getMyRestaurant)
router.post('/', authUser, createRestaurant)
router.put('/:id', authUser, updateRestaurant)
router.delete('/:id', authUser, deleteRestaurant)

module.exports = router
