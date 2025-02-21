// // Function Declaration = define a reusable block  of code
// //                        that performs a particular task.

// function greet() {
//   console.log("Hello there!");
// }

// const hello = function () {
//   console.log("Hello there!");
// }

// // Function Expression = store a function in a variable or values
// //                        and pass it around.
// // 1.CallBacks in asynchronus operations
// // 2. Array Methods
// // 3. Closures 
// // 4. Higher Order Functions
// // 5. Event Listeners

// hello();

// setTimeout(function(){
//     console.log("This is a callback function");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squaredNumbers = numbers.map(function (element) {
//     return Math.pow(element, 2);
//   })

// const cubedNumbers = numbers.map(function cube(element) {
//     return Math.pow(element, 3);
// });

// const evenNUmbers = numbers.filter(function (element) {
//     return element % 2 === 0;
// });
// const oddNUmbers = numbers.filter(function (element) {
//     return element % 2 !== 0;
// });
// const total = numbers.reduce(function (acc, element) {  
//     return acc + element;
// }, 0);

// console.log(squaredNumbers);
// console.log(cubedNumbers);
// console.log(evenNUmbers);
// console.log(oddNUmbers);
// console.log(total);

//Arrow Function = shorter syntax for writing function expressions
//                 a concise way to write functions expressions
//                 good for simple functions that you use only once
//                 (parameters) => {some code}

function greet(){
    console.log("Hello there!");
}
greet();

//using arrow function

const hello = (name,age) => {console.log(`hello ${name}`);
                         console.log(`you are ${age} years old`);
}

hello("Udit", 21);

//Example 2

setTimeout(() => {
    console.log("This is a callback function");
}, 3000);

//Example 3

const numbers = [1, 2, 3, 4, 5, 6];
const squaredNumbers = numbers.map((element) => Math.pow(element, 2));
const cubedNumbers = numbers.map((element) => Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((acc, element) => acc + element, 0);

console.log(squaredNumbers);
console.log(cubedNumbers);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(total);