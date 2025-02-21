//Logical Operaters

//AND -> all the condtions must be true (&&)
const age = 20;
const gender = "male";

if (age >= 18 && gender == "male") {
  console.log("You are Adult Male");
}

//OR -> at least one condtions should be true (||)
if (age >= 18 || gender == "female") {
  console.log("You are an Adult");
}
 
//NOT -> NOT means not(!)
//true=false & false=true

const number = 5;

if (number % 2 != 0) {
  console.log("odd");
}
