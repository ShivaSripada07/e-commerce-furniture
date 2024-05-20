const express =require('express')
const routes=express.Router();

const {
    getProducts,
    productSave,
    productDelete,
    productEditData,
    productEditSave
}=require('../controllers/product.controller')

routes.route('/')
    .get(getProducts)
    .post(productSave)
    .patch(productEditSave)
routes.route('/:id')
    .delete(productDelete)
    .get(productEditData)

module.exports=routes