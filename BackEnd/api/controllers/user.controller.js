const UserModel= require('../models/users.model')
const {handleError}=require('../utils')

function getUserById(req,res){
    UserModel.findById(res.locals.user.id)
    .then(response=> res.json(response))
    .catch((err)=>
    handleError(err,res))
}

function createUser(req,res){
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
    .remove({id:req.params.id})
    .then(response => res.json(response))
    .catch(err => handleError(err,res))
}

module.exports = {
    getUserById,
    createUser,
    updateUser,
    deleteUserById
}