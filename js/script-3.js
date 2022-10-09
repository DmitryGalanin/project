"use strict"

// function calculateVolumeAndArea(num) {
//     if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
//         return "При вычислении произошла ошибка";
//     } else {
//         const volume = num * num * num;
//         const area = 6 * (num * num);
//         return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
//     }
// }

// console.log(calculateVolumeAndArea('15.5'));


// function getCoupeNumber(num) {
//     if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     } else if (num == 0 || num > 36) {
//         return "Таких мест в вагоне не существует";
//     } else {
//         if (num <= 4) {
//             return '1';
//         } else if (num <= 8) {
//             return 2
//         } else if (num <= 12) {
//             return 3
//         } else if (num <= 16) {
//             return 4
//         } else if (num <= 20) {
//             return 5
//         } else if (num <= 24) {
//             return 6
//         } else if (num <= 28) {
//             return 7
//         } else if (num <= 32) {
//             return 8
//         } else if (num <= 36) {
//             return 9
//         }
//     }
// }

// console.log(getCoupeNumber(0));

// function getTimeFromMinutes(num) {
//     if (isNaN(num) || !Number.isInteger(num) || num < 0) {
//         console.log('Ошибка, проверьте данные');
//         return 'Ошибка, проверьте данные';
//     } else {
//         let clock;
//         let minutes;

//         if (num < 60) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 0 часов и ${minutes} минут`;
//         } else if (num < 120) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 1 час и ${minutes} минут`;
//         } else if (num < 180) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 2 часа и ${minutes} минут`;
//         } else if (num < 240) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 3 часа и ${minutes} минут`;
//         } else if (num < 300) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 4 часа и ${minutes} минут`;
//         } else if (num < 360) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 5 часов и ${minutes} минут`;
//         } else if (num < 420) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 6 часов и ${minutes} минут`;
//         } else if (num < 480) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 7 часов и ${minutes} минут`;
//         } else if (num < 540) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 8 часов и ${minutes} минут`;
//         } else if (num < 600) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 9 часов и ${minutes} минут`;
//         } else if (num < 660) {
//             clock = Math.floor(num / 60);
//             minutes = num - (60 * clock);
//             return `Это 10 часов и ${minutes} минут`;
//         }
//     }
// }

// console.log(getTimeFromMinutes(527));

function findMaxNumber(num1, num2, num3, num4) {
    if (num1 == undefined || num2 == undefined || num3 == undefined || num4 == undefined || typeof(num1) === 'string' || typeof(num2) === 'string' || typeof(num3) === 'string' || typeof(num4) === 'string') {
        return 0;
    } else {
        let arr = [num1, num2, num3, num4];
        let bigNum = arr[0];
        for (let i = 0; i < 4; i++) {   
            for (let j = 0; j < 4; j++) {
                if (arr[i] < arr[j] && bigNum < arr[j]) {
                    bigNum = arr[j];
                }
            } 
        } 
        return bigNum;   
    }
}

console.log(findMaxNumber(0, 5, 6.7, 4));