"use strict";

// function showFirstMessage(text) {
//     console.log(text + ' Hello world');
// };

// showFirstMessage('Hi');

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5, 4));

// const cal = (a, b) => a + b;
// console.log(cal(3, 4));

// function sayHello(name) {
//     return 'Привет, ' + name;
// }

// console.log(sayHello('Dmitry'));

// function getMathResult(num) {
//     let arr = [];
//     arr[0] = num - 1;
//     arr[1] = num;
//     arr[2] = num + 1;
//     return arr;
// }

// console.log(getMathResult(5));

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

function getMathResult(a, b) {
    if (typeof(b) === 'string' || b <= 0) { 
        return a;
    } else {
        let result = '';
        for (let i = 1; i <= b; i++) {
            result += a * i;
            if (i != b) {
                result += "---"
            }
        }
        return result;
    }
}

console.log(getMathResult(3, 10));