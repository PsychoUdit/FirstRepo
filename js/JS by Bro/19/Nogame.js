//Number Guessing Game

const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random()*(maxNum-minNum+1)+minNum);

let attempts = 0;

let guess;

let running = true;

while(running){

    guess = window.prompt(`Guess a Number Between ${minNum}-${maxNum}:- `);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please Enter a valid no.");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please Enter a valid no.");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low! try again!");
        }
        else if(guess>answer){
            window.alert("Too high! try again!");
        }
        else{
            window.alert(`Correct! The answer was ${answer} it took you ${attempts} Attempts`)
            running = false;
        }
    }
}
