// js asyns  ,non-blocking & event driven ,

// dynamic typed;
// NOTE :- one varable assigned multiple datatyped so this type of concept ins know as dynamic programming
let x=2;
x="hm";
console.log(x);
// asyns --> it means to not run code line by line 'set a timeout' run after the 1000mile second 
// single thread-->this mean one thread work all work 
// event driven ---> some event is happen / some proceess is happen 
console.log("start point ");

setTimeout(()=>{
    console.log("set a timeout");
},1000);

console.log("ending point ");



