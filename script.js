"use strict"

//while
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

//do ... while
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
    
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {

//     // if true, skip the rest of the loop body
//     if (i % 2 == 0) continue;
  
//     console.log(i); // 1, then 3, 5, 7, 9
//   }
// // the same
//   for (let i = 0; i < 10; i++) {

//     if (i % 2) {
//       alert( i );
//     }
  
//   }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
        
//     }
// }

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


let result = '';
const length = 10;


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) { 
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

