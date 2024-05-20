const mongoose=require('mongoose')
const userModel=require('./user.model')

const cartSchema=mongoose.Schema({
    cartItemId : {type : String, required : true , unique : true},
    userId : { type : mongoose.Schema.Types.ObjectId, ref : userModel },
    productName : {type : String, required : true },
    quantity : {type : Number },
    price : {type : String}
    
})

const cartModel =mongoose.model("cart",cartSchema)

module.exports=cartModel