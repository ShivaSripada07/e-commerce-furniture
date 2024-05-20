const orderModel=require('../model/order.model')

const getUserProducts= async (req,res)=>{
    try{
        const userId=req.params.id;
        console.log(userId)
        const orderProducts= await orderModel.find({"userId" : userId})
        if(orderProducts.length)
            res.status(200).json(orderProducts)
        else
            res.status(404).json({"message" : "orders not placed"})
    }
    catch(error){
        res.status(404).send(error)
    }
}

module.exports={
    getUserProducts,
}