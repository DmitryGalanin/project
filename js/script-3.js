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



// ------ (*) Продвинутая задача на работу с объектами и массивами ---------

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let totalArea = 0;
//     for (let value of data.shops) {
//         totalArea += (value.width * value.length);
//     } 
//     let totalVolume = totalArea * data.height;
//     let budgetRequired = totalVolume * data.moneyPer1m3;
//     if (data.budget < budgetRequired) {
//         return 'Бюджета недостаточно';
//     } else {
//         return 'Бюджета достаточно';
//     }
// }

// // isBudgetEnough(shoppingMallData);
// console.log(isBudgetEnough(shoppingMallData));

// ------ Упражнение по написанию кода 14: (*) Продвинутая задача на работу с объектами и массивами ---------

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let groupOne = [];
//     let groupTwo = [];
//     let groupThree = [];
//     for (let key in arr) {
//         if (key < 3) {
//             groupOne.push(arr[key]);
//         } else if (key < 6) {
//             groupTwo.push(arr[key]);
//         } else if (key < 9) {
//             groupThree.push(arr[key]);
//         } 
//     };

//     let stroke = 'Оставшиеся студенты:';

//     if (arr.length > 9) {
//         for (let k = 9; k < arr.length; k++) {
//             if (k == 9) {
//                 stroke += ` ${arr[k]}`;
//             } else {
//                 stroke += `, ${arr[k]}`;
//             }                        
//         }
//     } else {
//         stroke += ` -`;
//     }

//     let newArr = [groupOne, groupTwo, groupThree, stroke];
//     return newArr;

// }    


// console.log(sortStudentsByGroups(students));


// let number = 5;

// function logNumber() {
//     console.log(number)
// }

// logNumber();

// number = 6;

// logNumber();



// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// calc(1, 2);


//  Какое будет выведено значение: let x = 5; alert( x++ ); ?
//  Чему равно такое выражение: [ ] + false - null + true ?
//  Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//  Чему равна сумма [ ] + 1 + 2?
//  Что выведет этот код: alert( &quot;1&quot;[0] )?
//  Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
//  Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b)?
//  Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); ?
//  a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//  Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
//  Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot;?
//  Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ?


// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };


// console.log(restorantData2['openNow']);

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {

 
//     if ((parseInt(fDish['price']) + parseInt(sDish['price'])) < parseInt(average)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }


// console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

// function transferWaitors(data) {

//     const copy = {};
    
//     for (let key in data) {

//         if (Array.isArray(data[key])) {
//             // console.log(' содержит массив');
//             copy[key] = [];
//             // console.log(data[key].length);
//             for (let i = 0; i < data[key].length; i++) {
//                 // console.log(temporaryObj);
//                 let a = {};
//                 // let b = Object.assign({}, data[key][i]);
//                 a = Object.assign({}, data[key][i]);
//                 // console.log(a);
//                 copy[key].push(a);
//             }             
//         } else {
//             // console.log(' не содержит массив');
//             copy[key] = data[key];
//         }        
//     }
//     copy.waitors[0] = {name: 'Mike', age: 32};
//     // console.log(copy);
//     // console.log(restorantData);
//     return copy;
    
// }

// transferWaitors(restorantData);

//console.log(transferWaitors(restorantData));

// const hearts = document