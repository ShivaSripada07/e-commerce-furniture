const cartModel=require('../model/cart.model')

const showCart=async(req,res)=>{
    try{
        const cartItems= await cartModel.find({})
        console.log(cartItems)
        if(cartItems.length>0){
            res.status(200).json(cartItems)
        }
        else{
            res.status(404).json({"message" : "no items"})
        }
    }
    catch(error){
        res.status(300).json({"message" : "Failed to fetch cart items"})
    }
}

const addToCart= async (req,res)=>{
    try{
        const product= req.body
        await cartModel.create(product)
        res.status(200).json(product)
        
    }
    catch(error){
        res.status(300).json({"message" : "Failed to add product"})
    }
}

const deleteCartItem= async (req,res)=>{
    try{
        const cartItemId= req.params.id
        const item= await cartModel.findOneAndDelete({"cartItemId" : cartItemId})
        console.log(item)
        if(!item)
            res.status(404).json({"message" : "product not found"})
        else
            res.status(200).json(item)
        
    }
    catch(error){
        res.status(300).json({"message" : "Failed to delete product"})
    }
}


module.exports={
    addToCart,
    showCart,
    deleteCartItem,
}