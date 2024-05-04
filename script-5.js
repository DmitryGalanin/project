'use strict';

//    --------- 111 ----------   

// function showThis() {
//     console.log(this);
// };

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

//    --------- 2 ----------  

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

//    --------- 3 ----------  

// function User(name, id) {  
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// const ivan = new User('Ivan', 28);

//    --------- 4 ----------  

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1. Обычная функция: this = window, но если use strict - undefined
// 2. Контекст у методов объекта - сам объект
// 3. This в конструкторах и классах это новый экземпляр объекта
// 4. Ручная привязка this: call, apply и bind

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() { // если функция не стрелочная, то всё ок с this..
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         // console.log(this);
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// const double = function(a) {
//     return a * 2;
// };

// const double = (a) => {
//     return a * 2;
// };

// const double = a => a * 2; 

// console.log(double(4));


// ---------- Урок - 76. Классы ------------

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;        
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();

// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long= new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());



// ---------- Урок - 79. Классы ------------

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// };

// // log('basic', 'rest', 'operator', 'usage');

// // function calcOrDouble(number, basis) {
// //     basis = basis || 2;
// //     console.log(number * basis);
// // }

// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrDouble(3);



// ---------- Урок - 85. Promise ------------


// console.log('Запрос данных...');

// setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'TV',
//         price: 2000
//     };

//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000);

// --------------------

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 1000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 1000);
    });    
}).then(something => {
    console.log(something);
});



