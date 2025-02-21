// ternary operator =  condition ? true : false
//                     a Shortcut to if{}else{} statement
//                     condition ? true : false;

let age = 21;

let massage =
  age >= 18 //condition
  ? console.log("You can vote") //tru
  : console.log("You can't vote");//false

let time = 9;
let greeting =
  time >= 12 
  ? console.log("Good Morning") 
  : console.log("Good Afternoon");

let isStudent = true;
let message = isStudent
  ? console.log("You are a student")
  : console.log("You are not a student");

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 
? 10
:0;
console.log(`your total is $${purchaseAmount - purchaseAmount * discount / 100}`);
