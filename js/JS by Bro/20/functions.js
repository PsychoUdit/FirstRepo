//Functions = A Section of Reusable code.
//            Declare code once, use it whenever you want.
//            Call the Function to Execute that code.

// function happyBirthday(username,age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}!`);
//     console.log("Happy Birthday to you!");
//     console.log(`you are ${age} years old`);

// }

// // happyBirthday("Udit",21);
// happyBirthday("SpongeBob",30);
// happyBirthday("patrick",35);

function ADD(x, y) {
  return x + y;
}
function SUBTRACT(x, y) {
  return x - y;
}
function MULTIPLY(x, y) {
  return x * y;
}
function DIVIDE(x, y) {
  return x / y;
}
function isEven(number) {
  // if (number%2===0){
  //     return true;
  // }else{
  //     return false;
  // }
  return number % 2 === 0 ? true : false;
}
function isValidEmail(email) {
//   if (email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
return email.includes("@")? true:false;
}

console.log(ADD(2, 3));
console.log(SUBTRACT(2, 3));
console.log(MULTIPLY(2, 3));
console.log(DIVIDE(2, 3));
console.log(isEven(16));
console.log(isValidEmail("sanjithechefff@gmail.com"));
console.log(isValidEmail("PsychoUditgmail.com"));
