"use strict"

// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }

// if ( num < 49) {
//     console.log('error');
// } else if ( num > 100 ) {
//     console.log('many')
// } else {
//     console.log('ok');
// }

// (num == 50) ? console.log('ok!') : console.log('error');

const num = 100;

switch (num) {
    case 49: 
        console.log('wrong');
        break;
    case 100: 
        console.log('many');
        break;
    case 50: 
        console.log('right');
        break;
    default:
        console.log('not today');
        break;
};