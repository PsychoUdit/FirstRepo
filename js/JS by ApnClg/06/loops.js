//loops

//for LOOP -> if you know how many times
for (let i = 1; i <= 10; i++) {
  console.log("piyush" + i);
}

//while loop

let ip = 50;
let house = 50;

while (ip != house) {
  ip = ip + 1;
  console.log("step taken" + ip);
}

//do while

do {
  ip = ip + 1;
  console.log("step taken" + ip);
} while (ip != house);


//Guess the no.

let number = 40;

let guess = 0;
do{
    guess =parseInt( prompt("Guess a No.") )
    if(guess == number)
        break;
        alert('Winner')
}while(guess != 0)