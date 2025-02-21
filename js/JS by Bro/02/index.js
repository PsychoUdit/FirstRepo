// //Variable = a Container that stores a value.
// //           Behaves as if it is a box that stores a value.

// // 1. Declaration of a variable :-  let x;
// // 2. Initialization of a variable :-  x = 5;

// let x;
// x =100;

// console.log(x);


// let age= 25;

// console.log(age);

// let price = 100.50;

// console.log(price);

// let gpa = 3.5;

// let firstName = "Udit";
// let favFood = "Bhindi ki sabji";
// let email = "sanjithechefff@gmail.com"

// let Online = true;
// let forSale = false;
// let isStudent = true;







// console.log(typeof Online); //boolean
// console.log(`Udit is Online ${Online}`);
// console.log(`Is the product for sale? ${forSale}`);
// console.log(`Enrolled:- ${isStudent}`);

// console.log(typeof firstName);
// console.log(firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`Your favourite food is ${favFood}`);
// console.log(`Your email is ${email}`);

// console.log(typeof gpa);
// console.log(`You are ${age} years old`);
// console.log(`The price is ${price} dollars`);
// console.log(`Your gpa is ${gpa}`);


// let fullName = "Udit Chouhan";
// let age = 21;
// let isStudent = true;


// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `I am ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled as a Student:- ${isStudent}`;


// const = a Variable that can't be Change.

const PI = Math.PI;
let Radius;
let Circumference;

// // Radius = window.prompt(`Enter the Radius of the Circle`)
// Radius = Number(Radius);

// Circumference = 2 * PI * Radius;

// console.log(`The Circumference of the Circle is ${Circumference}`);
document.getElementById("mySubmit").onclick = function(){   
    Radius = document.getElementById("myInput").value;
    Radius = Number(Radius);
    Circumference = 2 * PI * Radius;
    document.getElementById("myH3").textContent = `The Circumference of the Circle is= ${Circumference}Cm`;
}