// While Loop = While loop is used to execute a block of statements repeatedly until a given condition is satisfied.
//               And when the condition becomes false, the line immediately after the loop in the program is executed.

// this loop repeats some code While Some Condition is true

// let username;

// while (username === "" || username === null) {
//   username = window.prompt(`Enter your name`);
// }
// console.log(`Hello ${username}`);

// do while Loop

// do{
//   username = window.prompt(`Enter your Name`);

// }while (username === "" || username === null)

//   console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
  username = window.prompt(`Enter your Username`);
  password = window.prompt(`Enter your Password`);

  if(username === "myUsername"&&"mypassword"){
    loggedIn= true;
    console.log(`You are loggedIn !`);

  }
  else{
    console.log(`Invalid Credentials! please try again`);
  }
}
