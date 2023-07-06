// function  
function formatNumber(num) {
    console.log(num.toFixed(2));
    return num.toFixed(2);
  }
  
  formatNumber(2);

//  op -> 2.00
// object 

let student={
            first:"aman",
            last:"dixit",
            age:30
            };
  

            for(let key in student){
              console.log(key +" :"+ student[key]);
              // for in loop return the  key pair 
            }

          //  for of loop genrally can,t work  in object 
          // but you can manupulate the object by using the Object.entries()
            for(let [key,value] of Object.entries(student)){
              console.log(key +" "+ value);
            }


// object clone 

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log( user.name ,user.age); // still John in the original object



            

