const userModel=require('../model/user.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const secret=process.env.secret

const handleRegister=async(req,res)=>{
    //console.log(req.body)
    const user=req.body
    //console.log(user)
    try{
        const existingUser=await userModel.findOne({"username" : user.username})
        console.log(user)
        
        if(existingUser){
            res.status(409).send({"message" : "username already exists !"})
        }
        else{
            await userModel.create(user)
            jwt.sign({user},secret,(err,token)=>{
                if(!err)
                    res.status(200).json(token)
                else
                    res.status(300).send(err)
            })
            //res.status(200).json(req.body)
        }
    }
    catch(error){
        res.status(404).json(error)
    }
}



module.exports={
    handleRegister
}