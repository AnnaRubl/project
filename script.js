"use strict"

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 10;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);


//      * 
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)

function numberToString(num) {
    return num.toString();
}
