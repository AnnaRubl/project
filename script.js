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


// let result = '';
// const length = 10;


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) { 
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// for (let i = 20; i >= 10; i--) {

//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// // При помощи цикла for выведите чётные числа от 2 до 10 включительно

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 1) {     
//         console.log(i);
//     }
// }
// // 1 3 5 7 9 

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {     
//         console.log(i);
//     }
// }
// // 2 4 6 8 10 


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// let arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i];
//     console.log(i);
// }

const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;