// const btn = document.querySelector('button');

// // btn.onclick = function() {
// //     alert('Click2');
// // };

// let i = 0;
// const deleteElement = (e) => {
//     console.log('Hi');
//     i++;
//     if (i == 2) {
//         btn.removeEventListener('click', deleteElement);
//     };
// };

// btn.addEventListener('click', deleteElement);


// btn.addEventListener('click', () => {
//     alert('Click4');
// });

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
});