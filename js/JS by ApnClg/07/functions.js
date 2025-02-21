//Functions

function sayhello() {
  console.log("hiiiiiii");
}

sayhello(); // function calling


//           arguments
function add(a, b, c) {
  console.log(a + b + c);
}

//parameters

add(6, 37, 45)
add(20, 40, 60)

function multipy(a, b) {
    return a * b;}

let a = multipy(10, 10)
console.log('the result is',a)


// un limited arguments
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22


function sumV2(...numbers){
    let ans = 0
    for(let i = 0; i < numbers.length; i++){
        ans = ans + numbers[i]
        
        // console.log(numbers)
    }
    return ans;
}
console.log( sumV2(3, 2, 10)); 
console.log( sumV2(4, 9, 6, 11));
console.log( sumV2(4, 9, 6, 11, 20, 40, 5000, 823, 3.91));