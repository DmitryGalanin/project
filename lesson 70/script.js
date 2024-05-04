'use strict';

let box = document.querySelector('.box');
// let width = box.clientWidth;
// let height = box.clientHeight;
// let width = box.offsetWidth;
// let height = box.offsetHeight;
let width = box.scrollWidth;
let height = box.scrollHeight;
let btn = document.querySelector('button');


// console.log(width, height);
btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
});

// console.log(box.getBoundingClientRect().top);

let style = window.getComputedStyle(box);
// console.log(style.display);

console.log(document.documentElement.scrollTop);
