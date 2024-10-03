const http = require('http');
const express = require('express')

const app = express();
app.use('/add-product',(req,res,next)=>{
    console.log("In another middleware!");
    res.send('<h1>Add Product</h1>');
});

app.use('/',(req,res,next)=>{
    console.log("In another middleware!");
    res.send('<h1>Hello from express</h1>');
});
app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
})