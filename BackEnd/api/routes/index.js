const router = require('express').Router()

const usersRouter = require('./users.router')
const restaurantRouter = require('./restaurant.router')
const reservationRouter = require('./reservation.router')
const tablesRouter = require ('./tables.router')
const authRouter = require('./auth.router')

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/restaurant', restaurantRouter)
router.use('/reservation', reservationRouter)
router.use('/tables', tablesRouter)
module.exports = router;
