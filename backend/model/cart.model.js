const mongoose=require('mongoose')
const userModel=require('./user.model')

const cartSchema=mongoose.Schema({
    cartItemId : {type : String, required : true },
    userId : { type : String },
    productName : {type : String, required : true },
    quantity : {type : Number },
    price : {type : Number}
    
})

const cartModel =mongoose.model("cart",cartSchema)

module.exports=cartModel