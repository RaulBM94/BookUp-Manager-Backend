const router = require('express').Router()

const{
    authUser
} = require('../utils') // Authenticated Route

const {
    getTablesByQuery,
    createTable,
    updateTable,
    deleteTable,
} = require('../controllers/table.controller')

router.get('/', authUser, getTablesByQuery)
router.post('/', authUser, createTable)
router.put('/:id', authUser,updateTable)
router.delete('/:id', authUser, deleteTable)

module.exports = router
