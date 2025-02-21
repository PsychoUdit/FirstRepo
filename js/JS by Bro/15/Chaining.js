// Method Chaining = calling multiple methods on the same object in a single statement.

let UserName = window.prompt("Enter your Username: ");

// Normal Method

UserName = UserName.trim();
let letter = UserName.charAt(0);
letter = letter.toUpperCase();

let extraChars = UserName.slice(1);
extraChars = extraChars.toLowerCase();

let finalUserName = letter + extraChars;

console.log(finalUserName);

// Method Chaining

UserName = UserName.trim().charAt(0).toUpperCase() + UserName.trim().slice(1).toLowerCase();