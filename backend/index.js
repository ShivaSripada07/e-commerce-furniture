const express=require('express')
const app=express();
require('dotenv').config()

const port=process.env.PORT
const userRoutes=require('./routes/user.route')
const productRoutes=require('./routes/product.route')
const orderRoutes=require('./routes/order.route')
const cartRoutes=require('./routes/cart.route')
const loginRoutes=require('./routes/login.route')

const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/furniture")
.then((res)=>{console.log("connected successfully")})
.catch((err)=>{console.log(err)})

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/order',orderRoutes)
app.use('/signup',userRoutes)
app.use('/login',loginRoutes)
app.use('/admin',productRoutes)
app.use('/cart',cartRoutes)
app.get('/',(req,res)=>{
    res.status(200).send("Home page")
})

app.listen(port,()=>{console.log(`server is listening at port ${port}`)})