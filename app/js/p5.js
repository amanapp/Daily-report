// map  
let a=[1,2,3,4,5];

let a2 =a.map((value)=>{
    return value*2;
})

console.log(a2);




// filter



let num=[1,2,3,4,5];

let num2 =num.filter((value)=>{
    return value>2;
})

console.log(num2);

// reduce 
let k=6
let num3 =a.reduce((value,value1)=>{
    return k>value1;
})

console.log(num3);