const router = require('express').Router()
const {
    authUser
} = require('../utils') // Authenticated Route

const {
    getUserById,
    createUser,
    deleteUserById,
    updateUser
} = require('../controllers/users.controller')

router.get('/:id', authUser, getUserById)
router.post('/', authUser, createUser)
router.put('/:id', authUser, updateUser)
router.delete('/:id', authUser, deleteUserById)

module.exports = router
