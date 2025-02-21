// CallBack = a Function that is passed as an argument
//            to another function

//            used to Handle Asynchronous Operations:
//            1.Reading a file
//            2.HTTP Request
//            3.SetTimeOut
//            4.SetInterval
//            5.Interacting with Database
//            6.Event Listeners

// // "hey, when you are done, call this function."
// hello(wait);

// function hello(callback) {
//     console.log("Hello!");
//     callback();
// }
// function wait() {
//     console.log("wait!");
// }
// function leave() {
//     console.log("leave!");
// }
// function Goodbye() {
//     console.log("Goodbye!");
// }
sum(displayPage, 5, 5);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}
function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
