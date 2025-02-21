//IF Statements = if (condition) {code to run if condition is true}
//                if a condition is true, then the code inside the curly braces will run
//                if not true, then the code will not run
const myText = document.querySelector('#myText');
const mySubmit = document.querySelector('#mySubmit');
const myOutput = document.querySelector('#resultElement');
let age;;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >=100){
        // console.log('You are too old to enter this site');
        myOutput.textContent = 'You are too old to enter this site';
     }
    else if(age >= 18){
        // console.log('You are old Enough to enter this site');
        myOutput.textContent = 'You are old Enough to enter this site';
    }
    else if(age < 0){
        // console.log('You are not born yet');
        myOutput.textContent = 'You are not born yet';
    }
    else if(age == 0){
        // console.log(`You can't enter you were Just Born`);
        myOutput.textContent = `You can't enter you were Just Born`;
    }
    else {
        // console.log('You are too young to enter this site');
        myOutput.textContent = 'You are too young to enter this site';
    }
}
let time = 14;

if(time<12){
    console.log('Good Morning');
}
else {
    console.log('Good Afternoon');
}


if (age >= 18) {
    console.log('You can drink beer');
}
// if the condition is false, then this code will not run |
//                                                        V
else {                                                   
    console.log('You can drink juice');
}


let isStudent = true;

if(isStudent){
    console.log('You are a student');
}
else {
    console.log('You are not a student');
}

let YourAge = 21;
let hasLicense = true;

if(YourAge >= 18){
    console.log('You are eligible to drive');
    if(hasLicense){
        console.log('You can drive');
    }
    else {
        console.log('You can not drive');
    }
}
else {
    console.log('You are not eligible to drive');
}

