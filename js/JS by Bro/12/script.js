// // Switch Case = can be an efficient replacement to many if else statements

// let day = 5;
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Invalid Input');
//         break;
// }


let  testScore = 92;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = 'A';
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore >= 70:
        letterGrade = 'C';
        break;
    case testScore >= 60:
        letterGrade = 'D';
        break;
    default:
        letterGrade = 'F';
        break;
}