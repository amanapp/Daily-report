// Reverse a string: Write a function that takes a string as input and returns the reverse of that string using javascript.


let input:string ="hello i am ";


// string resvers
function stringReverse(value:string){
    return value.split(" ").reverse().join(" ")
} 


// reverse all word and alphabet also 
function wordReverse(value:string){
    return value.split("").reverse().join("");
}
//   calling function the stringRevserse
let result:string=stringReverse(input);
//   calling function the stringRevserse

let result1:string =wordReverse(input);

console.log(result);
console.log(result1);

