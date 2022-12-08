const UserModel= require('../models/users.model')
const {handleError}=require('../utils')
const bcrypt = require('bcrypt')

function getUserById(req,res){
    UserModel.findById(req.params.id)
    .then(response=> res.json(response))
    .catch((err)=>
    handleError(err,res))
}

function createUser(req,res){
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    UserModel.create(req.body)
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
}

function updateUser (req,res){
    UserModel
    .findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err,res))
}

function deleteUserById (req,res){
    UserModel
    .findByIdAndDelete(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err,res))
}

module.exports = {
    getUserById,
    createUser,
    updateUser,
    deleteUserById
}