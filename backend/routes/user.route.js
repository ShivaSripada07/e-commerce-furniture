const express=require('express')
const routes=express.Router()
const {
    handleRegister
}=require('../controllers/user.controller')

routes.route('/login')
    .post(handleRegister)

    module.exports=routes