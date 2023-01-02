//   ----- Рекурсия -----  

// console.log(document.head);

// console.log(document.documentElement);

// console.log(document.body.childNodes);

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     console.log(result);
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 4));

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],
//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],
//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// цикл

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {

//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             } 
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }    
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));


// Рекурсия 

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }

// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);




// Задача на рекурсию . Факториал

// function factorial(n) {   
//     if (typeof n === "number" && Number.isInteger(n)) {
//         let total = n;        

//         if (n <= 0) {       
//             return 1;
//         } else if (n === 1) {       
//             return total;
//         }  else {        
//             total *= factorial(n - 1);
//         }  
//         return(total);
//     } else {
//         return 'Введите целое не отрицательное число';
//     }
// }


// console.log(factorial(-3));

'use strict';

const now = new Date(2020, 5, 1, 20);

console.log(now);