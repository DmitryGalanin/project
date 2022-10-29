"use strict";

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

// function findMaxNumber(num1, num2, num3, num4) {
//     if (num1 == undefined || num2 == undefined || num3 == undefined || num4 == undefined || typeof(num1) === 'string' || typeof(num2) === 'string' || typeof(num3) === 'string' || typeof(num4) === 'string') {
//         return 0;
//     } else {
//         let arr = [num1, num2, num3, num4];
//         let bigNum = arr[0];
//         for (let i = 0; i < 4; i++) {   
//             for (let j = 0; j < 4; j++) {
//                 if (arr[i] < arr[j] && bigNum < arr[j]) {
//                     bigNum = arr[j];
//                 }
//             } 
//         } 
//         return bigNum;   
//     }
// }

// console.log(findMaxNumber(0, 5, 6.7, 4));

// Числа Фибоначчи

// function fib(num) {
//     let arr = [];
//     let string = '';

//     if (!Number.isInteger(num) || num < 0 || num < 1) {
//         return '';
//     } else if (num <= 1) {
//         arr[0] = 0;
//         string += arr[0];
//         return string;                
//     } else if (num <= 2) {
//         arr[0] = 0;
//         arr[1] = 1;
//         string += arr[0] + ' ';
//         string += arr[1];
//         return string;       
//     } else if (num > 2) {
//         arr = [0, 1];
//         string = '0 1 ';

//         for (let i = 2; i < (num - 1); i++) {
//             arr[i] = arr[i - 1] + arr[i - 2];
//             string += arr[i] + ' ';            
//         }        
//         arr[num] = (arr[num - 2] + arr[num - 3]);
//         string += arr[num];
//         return string;
//     }
// }

// console.log(fib(7));


// callback функции

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 2000);
// }

// function second() {
//     console.log(2);
// }

// function firstSecond(one, two) {
//     one();
//     two();
// }

// firstSecond(first, second);

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// };

// learnJS('JavaScript', function() {
//     console.log('Я прошёл этот урок');
// })







// -------- Урок 35 ------------


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// -- Делаем поверхностную копию объекта--

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];        
//     }
//     return objCopy;
// }

// const numbers  = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers['a'] = 10;

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// console.log(clone);


// -- Делаем поверхностную копию массива --

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'qwerty';

// console.log(newArray);
// console.log(oldArray);

// -- Spread оператор --

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const obj = {
//     one: 1,
//     two: 2,
//     three: 3
// };

// const newObj = {...obj}

// console.log(obj);
// console.log(newObj);

// ------ Упражнение по написанию кода 10: Задачи на работу с объектами ---------

// Деструктуризация объъектов

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options);

// // const {border, bg} = options.colors;

// console.log(border);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     const {languages, programmingLangs, exp} = plan.skills;
//     return exp;
// }

// // console.log(showExperience(personalPlanPeter));

// // "Язык js изучен на 20% Язык php изучен на 10%"

// function showProgrammingLangs(plan) {
//     const {languages, programmingLangs, exp} = plan.skills;
//     let stroke = '';

//     for (let key in programmingLangs) {
//         stroke += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     console.log(stroke);
//     return stroke;
// }

// // showProgrammingLangs(personalPlanPeter);

// // personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// // => 'Мне 29 и я владею языками: RU ENG'

// personalPlanPeter.showAgeAndLangs = function(plan) {
//     let stroke = `Мне ${plan['age']} и я владею языками: `;

//     const {languages, programmingLangs, exp} = plan.skills;

//     for (let key in languages) {
//         stroke += `${languages[key]} `.toUpperCase();
//     }

//     console.log(stroke);
//     return stroke;
// } 

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// ------ Урок 33. Массивы и псевдомассивы ---------

// const arr = [2, 3, 6, 8, 10];

// arr.pop();
// arr.push(12);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length < 1) {
//         return 'Семья пуста';
//     } else {
//         let stroke = 'Семья состоит из: ';
//         stroke += arr.join(' ');
//         return stroke;
//     }    
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let key of arr) {
//         console.log(key.toLowerCase());
//     }
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';
// const someString2 = 2;

// function reverse(str) {
//     let newString = '';
//     if (typeof str == 'string') {
//         for (let i = str.length - 1; i >= 0; i--) {
//             newString += str[i];        
//         }
//         return newString;
//     } else {
//         return 'Ошибка!';
//     }
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// let allCurrencies = baseCurrencies.concat(additionalCurrencies);

// // console.log(allCurrencies);

// let missingCurr = 'UAH';

// function availableCurr(arr, missingCurr) {
//     let answer = 'Доступные валюты:\n';
//     if (arr.length !== 0) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == missingCurr) {
//                 continue;            
//             } else {
//                 answer += `${arr[i]}\n`;            
//             }
//         }
//         return answer;
//     } else {
//         return 'Нет доступных валют';
//     }   
// }



// console.log(availableCurr(allCurrencies, missingCurr));


// ------ Урок 36. Основы ООП, прототипно-ориентированное наследование ---------

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);

// // const john = {
// //     health: 100
// // }

// // john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);



// // console.log(John.armor);
// john.sayHello();