// create folder in computer 
// access folder in vs code 
// run commond -> npm init -y 
// install express in -> npm i express
// 

const express =require('express');
const app =express();

// // boby parser make 
let bodyPraser=require('body-parser');
// // powerup app by using the body parser
app.use(express.json());
// app.use(bodyPraser.urlencoded({ extended: true })); 
// server start by express js
app.listen(8000,()=>{
    console.log("express server is start");
});

// get api call 
app.get('/', (req , res)=>{
    res.send("calculater start ");
});

// post api make 
app.get('/add/result',(req,res)=>{
    // console.log(req,'..............req');
    // console.log(req.body,'..............req');
    const {num1 , num2}=req.body;


    let adding=num1+num2;
    res.send(`sum of two number   ${adding}`);
    // res.send(`sub of two number ${adding}`);
    res.json({adding});
})

app.post('/sub/result',(req,res)=>{
    const {num1 , num2}=req.body;
    console.log(num1);
    console.log(num2);
    let adding=parseInt(num1-num2);
    res.send(`sub of two number ${adding}`);
    res.send("summit request");

    
})
app.get('/mul/result',(req,res)=>{
    const {num1 , num2}=req.body;
    
    let adding=num1*num2;
    res.send(`mul of two number ${adding}`);
    res.send("summit request");
})

app.post('/div/result',(req,res)=>{
    const {num1 , num2}=req.body;
    
    let adding=num1/num2;
    res.send("Div of two number "+adding);
    res.send("summit request");
})

