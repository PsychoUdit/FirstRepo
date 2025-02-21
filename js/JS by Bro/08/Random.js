//RANDOM NO. GENERATOR

const min = 1;
const max = 6;
const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');



let n1 ;
let n2 ;
let n3 ;

myButton.addEventListener('click', function(){
    n1 = Math.floor(Math.random()*(max - min))+min;
    n2 = Math.floor(Math.random()*(max - min))+min;
    n3 = Math.floor(Math.random()*(max - min))+min;
    label1.textContent = n1;
    label2.textContent = n2;
    label3.textContent = n3;
});

console.log(n);