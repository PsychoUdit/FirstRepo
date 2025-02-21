// Variable Scope = Where a Variable is recognized
//                  and accessible (local vs global)
let x = 10;//global declaration
console.log(x);

function function1 () {
    // let x = 1;//local declaration
    console.log(x);
}
function function2 () {
    let x = 2;
    console.log(x);
}
function1();
function2();