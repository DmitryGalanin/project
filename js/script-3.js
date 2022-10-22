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


function getCoupeNumber(num) {
    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (num == 0 || num > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        if (num <= 4) {
            return '1';
        } else if (num <= 8) {
            return 2
        } else if (num <= 12) {
            return 3
        } else if (num <= 16) {
            return 4
        } else if (num <= 20) {
            return 5
        } else if (num <= 24) {
            return 6
        } else if (num <= 28) {
            return 7
        } else if (num <= 32) {
            return 8
        } else if (num <= 36) {
            return 9
        }
    }
}

console.log(getCoupeNumber(2));