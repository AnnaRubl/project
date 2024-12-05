"use strict"

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];  
//     }
//     console.log(result);
//     return result;
// }

firstTask();


function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    let i = 0;

    while (i < arr.length) {
        result.push(arr[i]); 
        i++; 
    }
    console.log(result);
    return result;
}

firstTask();

///////////////////////////////////////////////////////////////////////

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// let i = 0;
//     while (i < data.length) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;  
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//         i++;
//     }
// console.log(data);
// return data;

//[ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] += data[i];
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
//     return data;
    
// }

// secondTask();

////////////////////////////////////////////////////////////////////////

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
        for (let i = 0; i < data.length; i++) {
            result[i - 1] = data[data.length - i]  
        }
    console.log(result);
    return result;
}

thirdTask();

// result[i - 1] = data[data.length - i];
// data.length - i дає індекс елемента в масиві data, починаючи з останнього елемента (наприклад, для i = 1 це буде data[4], для i = 2 — data[3] і так далі).
// result[i - 1] дозволяє записати елементи в масив result з індексами від 0 до 4 (так як індексація масивів в JavaScript починається з 0).
// Таким чином, ми копіюємо елементи з масиву data в масив result у зворотному порядку.