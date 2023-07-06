const express=require("express");
const app=express();

const path=require("path");

// console.log(__dirname);
// console.log(path.join(__dirname ,'../public'));

// let staticpath=path.join(__dirname ,'../public');
// console.log(staticpath);

// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(process.cwd(), '../public')));


// get api call 
app.get('/', (req , res)=>{
    res.send("calculater start ");
});



app.listen(8000,()=>{
    console.log("express server is start");
});
