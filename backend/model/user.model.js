const mongoose=require('mongoose')
//const cartModel=require('./cart.model')
const orderModel=require('./order.model')

const userSchema=mongoose.Schema({ 
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true,
    },
    mobileNumber :{
        type : String,
        required : true,
    },
    active :Boolean,
    role :String,
    // cart :{
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'cartModel',
    // },
    // ordersList :[{
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : orderModel,
    // }]
});

const userModel=mongoose.model("user",userSchema)

module.exports=userModel