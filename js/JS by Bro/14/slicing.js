//String Slicing = String.slice(start, end)
//                 Creating a Substring from a portion of another string

const FullName = "Psycho Udit";

// let firstName = FullName.slice(0, 6);
// let lastName = FullName.slice(6);

// console.log(firstName);
// console.log(lastName);

// let firstChar = FullName.slice(0, 1);
// let lastChar = FullName.slice(-1);

// console.log(firstChar);
// console.log(lastChar);

let firstName = FullName.slice(0, FullName.indexOf(" "));
let lastName = FullName.slice(FullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "udit30102004@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(domain);
