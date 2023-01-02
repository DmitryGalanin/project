

function myAnimation() {
    const elem = document.querySelector('.box');
    let position = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (position === 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + "px";
            elem.style.left = position + "px";
        }
        
    }
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', myAnimation);































// const btn = document.querySelector('.btn');

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     id = setInterval(frame, 25)

//     function frame() {
//         if (pos === 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     };
// };

// btn.addEventListener('click', myAnimation);




// const timerId = setTimeout (function() {
//     console.log('Hello');
// }, 2000);

// const timerId = setTimeout (logger, 2000);

// function logger () {
//     console.log('text');
// }


// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     };
//     console.log('text');
//     i++;
// };