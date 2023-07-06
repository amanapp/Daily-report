// Reverse a string: Write a function that takes a string as input and returns the reverse of that string using javascript.
var input1 = "hello i am ";
// string resvers
function stringReverse(value) {
    return value.split(" ").reverse().join(" ");
}
// reverse all word and alphabet also 
function wordReverse(value) {
    return value.split("").reverse().join("");
}
//   calling function the stringRevserse
var result2 = stringReverse(input1);
//   calling function the stringRevserse
var result3 = wordReverse(input1);
console.log(result2);
console.log(result3);
