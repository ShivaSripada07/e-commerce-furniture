const express=require('express')
const routes=express.Router()

const {
    getUserProducts,
}=require('../controllers/order.controller')

routes.get('/:id',getUserProducts)

module.exports=routes