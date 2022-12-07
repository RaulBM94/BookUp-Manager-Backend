const TableModel =require ('../models/tables.model') 

const {handleError}=require('../utils')

function getTablesByQuery(req,res){
    TableModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createTable(req,res){
    TableModel.create(req.body)
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
}

function updateTable (req,res){
    TableModel
    .findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err,res))
}

function deleteTable (req,res){
    TableModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err,res))
}

module.exports = {
    getTablesByQuery,
    createTable,
    updateTable,
    deleteTable
}