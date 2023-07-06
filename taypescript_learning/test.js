// Reverse a string: Write a function that takes a string as input and returns the reverse of that string using javascript.
var input = "hello i am ";
// string resvers
function stringReverse(value) {
    return value.split(" ").reverse().join(" ");
}
// reverse all word and alphabet also 
function wordReverse(value) {
    return value.split("").reverse().join("");
}
//   calling function the stringRevserse
var result = stringReverse(input);
//   calling function the stringRevserse
var result1 = wordReverse(input);
console.log(result);
console.log(result1);
