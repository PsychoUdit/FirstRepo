// foreach() method = used to execute a function on each item in an array
//                    this method is used to iterate over th elements of an array
//                    and apply a function (callback) to each element

//                    array.forEach(callback)
//                    element, index, array are provided as arguments to the callback function

// let numbers = [1, 2, 3, 4, 5];

// using for loop
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// using forEach() method
// numbers.forEach(double);
// numbers.forEach(display);
// numbers.forEach(triple);
// numbers.forEach(display);
// numbers.forEach(square);
// numbers.forEach(display);
// numbers.forEach(cube);
// numbers.forEach(display);
// function double(element, index, array) {
//  array[index] = element * 2;
// }
// function triple(element, index, array) {
//     array[index] = element * 3;
// }
// function square(element, index, array) {
//     array[index] = Math.pow(element, 2);
// }
// function cube(element, index, array) {
//     array[index] = Math.pow(element, 3);
// }
// function display(element) {
//   console.log(element);
// }


// let Fruit = ['APPLE', 'BANANA', 'MANGO', 'ORANGE', 'PINEAPPLE'];

// Fruit.forEach(capitalize);
// Fruit.forEach(display);

// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array) {
//     array[index] = element.toLowerCase();
//   }
// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//   }
  

// function display(element) {
//   console.log(element);
// }

// map() method = used to create a new array with 
//                the results of calling a function 
//                on every element in an array

//                array.map(callback)

// const dates = ["2024-1-10", "2024-2-10", "2024-3-10", "2024-4-10", "2024-5-10"];
// const newDates = dates.map(formatDate);

// console.log(newDates);

// function formatDate(date) {
//   const [year, month, day] = date.split("-");
//   return `${day}/${month}/${year}`;
// }


// filter() method = used to create a new array with
//                   all elements that pass the test

//                   array.filter(callback)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

// console.log(evenNumbers);

// console.log(oddNumbers);

function isEven(number) {
  return number % 2 === 0;
}
function isOdd(number) {    
    return number % 2 !== 0;
}

const ages = [20, 30, 40, 50, 60, 70, 80, 90, 100];

const youngAges = ages.filter(isYoung);
const oldAges = ages.filter(isOld);

// console.log(youngAges);
// console.log(oldAges);

function isYoung(age) {
  return age <= 40;
}
function isOld(age) {
  return age >= 50;
}

const words = ["apple", "banana", "mango", "orange", "pineapple"];
const longWords = words.filter(isLong);
const shortWords = words.filter(isShort);

// console.log(longWords);
// console.log(shortWords);

function isLong(word) {
  return word.length >= 6;
}
function isShort(word) {
  return word.length < 6;
}

// reduce() method = used to reduce the array to a single value
//                   the reduce() method executes a provided function
//                   for each value of the array (from left-to-right)
//                   the return value of the function is stored in an accumulator

//                   array.reduce(callback, initialValue)

let numbers2 = [1, 2, 3, 4, 5];

let sum = numbers2.reduce(add, 0);
let product = numbers2.reduce(multiply, 1);
let max = numbers2.reduce(getMax, 0);
let min = numbers2.reduce(getMin, 0);

// console.log(sum);
// console.log(product);
// console.log(max);
// console.log(min);

function add(accumulator, number) {
    return accumulator + number;
    }
function multiply(accumulator, number) {
    return accumulator * number;
    }
function getMax(accumulator, number) {
    return Math.max(accumulator, number);
    }
function getMin(accumulator, number) {
    return Math.min(accumulator, number);
    }

// Example 2

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sumPrices, 0);

console.log(`$${total.toFixed(2)}`);

function sumPrices(total, price) {
  return total + price;
}
// Example 3

const grades = [80, 85, 90, 95, 100];

const maximum = grades.reduce(getMaxGrade);
const minimum = grades.reduce(getMinGrade);

console.log(maximum);
console.log(minimum);

function getMaxGrade(max, grade) {
  return Math.max(max, grade);
}
function getMinGrade(min, grade) {
  return Math.min(min, grade);
}
