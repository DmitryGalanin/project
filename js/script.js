"use strict";

// let result = '';

// first: for (let i = 1; i < 4; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 3) break first;
//             console.log(`third level: ${k}`);
//         }
//     }
// }

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//     if (! (i % 2)) {
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i >= 2 && i <= 16) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }    
//     i++;
// } 

// const arrayOfNumbers = [];
// let x = 5;
// let y = 10;

// for (let i = x; i <= y; i++) {
//     arrayOfNumbers[i - x] = i;
// }

// console.log(arrayOfNumbers);


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else {
//         data[i] = data[i] += " - done";
//     }    
// }

// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// let result = [];

// for (let i = 0; i < data.length; i++) {
//     result[i] = data[data.length - (i + 1)];
// }

// console.log(result);

const lines = 5;
let result = '';

for (let i = 0; i < lines + 1; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";        
    }
    for (let k = 0 ; k <= i * 2; k++) {
        result += "*";        
    }   
    result += "\n";
}

console.log(result);