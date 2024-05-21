const orderModel=require('../model/order.model')
const productModel=require('../model/product.model')


const getUserProducts= async (req,res)=>{
    try{
        const userId=req.params.id;
        console.log(userId)
        const orderProducts= await orderModel.find({"userId" : userId})
        if(orderProducts.length>0)
            res.status(200).json(orderProducts)
        else
            res.status(404).json({"message" : "orders not placed"})
    }
    catch(error){
        res.status(404).send(error)
    }
}

const getOrders= async (req,res)=>{
    try{
        
        const orders= await orderModel.find({})
        if(orderProducts.length>0)
            res.status(200).json(orders)
        else
            res.status(404).json({"message" : "orders not placed"})
    }
    catch(error){
        res.status(404).send(error)
    }
}

const saveProduct= async(req,res)=>{
    try{
        const productId=req.params.id
        const product =await productModel.findOne({"productId" : productId})
        
        
    }
    catch(error){

    }
}

module.exports={
    getUserProducts,
    saveProduct,
    getOrders
}