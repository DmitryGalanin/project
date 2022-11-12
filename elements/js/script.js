'use strict';

const box = document.getElementById('box'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');



for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = 'green';
}

box.style.cssText = 'background-color: yellow; width: 500px;';

hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

// console.log(hearts);

const div = document.createElement('div');
div.classList.add('black');
circles[1].after(div);

// circles[0].remove();

hearts[0].replaceWith(div);

div.innerHTML = '<h1>Hello world</h1>';
// div.textContent = 'Hello';

// div.insertAdjacentHTML('beforebegin', '<h2>HI</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>HI</h2>');
// div.insertAdjacentHTML('afterend', '<h2>HI</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>HI</h2>');