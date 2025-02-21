// // Array = a variable like Structure that can hold 
// //         more then one value.

// let fruits = ["apple","orange","banana"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[3] = "coconut";

// console.log(fruits[3]);

// fruits.push("pineapple");

// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("mango")
// console.log(fruits);

// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");

// console.log(fruits);
// console.log(numOfFruits);
// console.log(index);

// fruits.sort().reverse();
// for(let i=0;i< fruits.length;i++){
//     console.log(fruits[i]);
// }


// Spread Operator = ... allows an iterable such as an array 
//                       or string to be expanded 
//                       into separate elements.
//                       (unpacks the elements of an array)

let numbers = [1,2,3,4,5];

let maximum = Math.max(numbers);//Math object is used to perform mathematical operations on numbers it won't recognize the no.s in array.
let maximum2 = Math.max(...numbers);// without this operator
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(maximum2);
console.log(minimum);

let username = "PSYCHOUDIT";

let letters = [...username].join("-");

console.log(letters);


// using this op we can Also create copy of arrays let's see ex.

let fruits = ["apple","orange","banana"];
let veggies = ["tomato","ladyfinger","cauliflower"];
let fruits2 = [...fruits];//this is a copy of fruits
let foods = [...fruits,...veggies];//this is a combination of two array.

console.log(foods);

//Rest Parameters = (...rest) allows a function work with a variable 
//                  numbers of arguments by bundling them into a single array.

function f1 (...foods) {
    console.log(...foods);
}
const food1 = "pizza";
const food2 = "burger"; 
const food3 = "pasta";
const food4 = "noodles";
const food5 = "sandwich";


f1(food1,food2,food3,food4,food5);

// lets see an another ex.:-


function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result;
}
function getAvg(...numbers){
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result/numbers.length;
}

const total = sum(655,5,9,4,4656,554,654,65,56,465,4,4564,1);
const avg = getAvg(65,59,59,2,56,5,56,65,56,2,53,65,35);

console.log(`your total is ${total}`);
console.log(`your average is ${avg}`);


// lets see an ex of strings.

function combineStrings(...strings){
return strings.join(" ");
}

const fullName = combineStrings("MR.","Udit","Rajkumar","Singh","Chouhan");

console.log(fullName);