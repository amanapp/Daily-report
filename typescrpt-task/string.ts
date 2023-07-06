// Reverse a string: Write a function that takes a string as input and returns the reverse of that string using javascript.


let input1:string ="hello i am ";


// string resvers
function stringReverse(value:string){
    return value.split(" ").reverse().join(" ")
} 


// reverse all word and alphabet also 
function wordReverse(value:string){
    return value.split("").reverse().join("");
}
//   calling function the stringRevserse
let result2:string=stringReverse(input1);
//   calling function the stringRevserse

let result3:string =wordReverse(input1);

console.log(result2);
console.log(result3);

