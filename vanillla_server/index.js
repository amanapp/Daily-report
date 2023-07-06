// create folder in computer 
// access folder in vs code 
// run commond -> npm init -y 
// install express in -> npm i express
// 

const express =require('express');
const app =express();

let bodyPraser=require('body-parser');


app.use(bodyPraser.json());

// server start by express js
app.listen(3000,()=>{
    console.log("express server is start");
});

// get api call 
app.get('/', (req , res)=>{
    res.send("calculater start ");
});

app.get('/add/:num1/:num2',(req,res)=>{
    let num1 =parseInt(req.params.num1);
    let num2 =parseInt(req.params.num2);

    let adding=num1+num2;
    res.send(`sum of two number   ${adding}`);
})

app.get('/sub/:num1/:num2',(req,res)=>{
    let num1 =parseInt(req.params.num1);
    let num2 =parseInt(req.params.num2);
    let adding=num1-num2;
    res.send(`sub of two number ${adding}`);
})

app.get('/mul/:num1/:num2',(req,res)=>{
    let num1 =parseInt(req.params.num1);
    let num2 =parseInt(req.params.num2);
    let adding=num1*num2;
    res.send(`mul of two number ${adding}`);
})

app.get('/div/:num1/:num2',(req,res)=>{
    let {num1 , num2}=parseInt(req.body);
    let adding=num1/num2;
    res.send(`Div of two number ${adding}`);
})