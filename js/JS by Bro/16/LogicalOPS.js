// Logical Operators = used to determine the logic between variables or values.
// && = and           (true && true) returns true ->  AND operator
// || = or            (true || false) returns true -> OR operator
// ! = not            !(true) returns false -> NOT operator

// Logical Operators

const temp = 20;

// Normal Method

if (temp > 0) {
    if (temp < 30) {
        console.log('Temp is good');
    }
}
// Using Logical Operators

if (temp > 0 && temp < 30) {
    console.log('Temp is very good');
} else {    
    console.log('Temp is not good');
}

// Using OR Operator
if (temp <= 0 || temp > 30) {
    console.log('Temp is not good');
} else {    
    console.log('Temp is excellent');
}

// Using NOT Operator
const isSunny = true;

if (!isSunny) { 
    console.log('You need an umbrella');
} else {
    console.log('You do not need an umbrella');
}
