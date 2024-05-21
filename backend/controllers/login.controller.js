const loginModel=require('../model/login.model')
const userModel=require('../model/user.model')

const checkUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await userModel.findOne({"email" : email})
        console.log(user)
        if(user){
            const existingUser= await loginModel.findOne({"email" : email})
            if(!existingUser)
                loginModel.create({"email": email,"password" : password})
            res.status(200).send(true)
        }
        else{
            res.status(404).send(false)
        }

    }
    catch(error){
        res.status(404).send(false)
    }
}

module.exports={checkUser}