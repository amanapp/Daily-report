const express=require('express');
const students= require('./student');

const app=express();


// json input reflected by using the body parser 
app.use(express.json());



// port is started 
app.listen(8000,()=>{
    console.log("hi hello port is start");
})


// get requested is sended 
app.get('/',(req,res)=>{
    res.json(students);
})


// post methord is call  to add info in json 
app.post('/add',(req, res)=>{

    if(!req.body.email){
        res.status(400);
        return res.json({errror: "Plaese enter the email......"});

    }
    
    const user={
        id: students.length+1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    students.push(user);
    // console.log(req.body);
    // res.send("add student ");
    res.json(students);

})

// put 
app.put('/add/:id',(req,res)=>{

       let id=req.params.id;
        first_name= req.body.first_name;
        last_name= req.body.last_name;
        email= req.body.email;

        let index=students.findIndex((student)=>{
            return (student.id== Number.parseInt(id))
        })


        if(index>=0){
            let std=students[index];
            std.first_name=first_name;
            std.last_name=last_name;
            std.email=email;
            res.json(std);
        }else{
            return res.status(404);
        }

})

// delete
app.delete('/add/delete/:id',(req,res)=>{
    let id=req.params.id;

    let index=students.findIndex((student)=>{
        return (student.id== Number.parseInt(id))
    })
    if(index>=0){
        let std=students[index];
        students.splice(index,1);
         
    }else{
        return res.status(404);
    }
    
})

// patch 
// app.patch('/add/patch/:id',(req,res)=>{
//     let id=req.params.id;
//         first_name= req.body.first_name;
//         last_name= req.body.last_name;
//         email= req.body.email;

//         let index=students.findIndex((student)=>{
//             return (student.id== Number.parseInt(id))
//         })


//         if(index>=0){
//             let std=students[index];
//             std.first_name=first_name;
//             std.last_name=last_name;
//             std.email=email;
//             res.json(std);
//         }else{
//             return res.status(404);
//         }
  
// })