//HOW to Accept User Input in JavaScript

// 1.Easy WAY = prompt() method
// 2.PROFESSIONAL WAY = HTML text box

let UserInput;
// UserName = window.prompt("Enter Your Name");
// console.log(`Hello ${UserName}`);

document.getElementById("mySubmit").onclick = function () {
     UserInput = document.getElementById("myText").value;
    console.log(UserInput);
    document.getElementById("myH1").textContent = `Hello ${UserInput}`;
}