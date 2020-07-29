// console.log('the-dome');

// function init() {
//         let p = document.querySelector('p');
//         console.log(p);
//         const imgs = document.querySelectorAll('div img');
//         console.log(imgs);
//         const div = document.querySelector('div.item.item2');
//         const imgRequired = div.querySelector('img');
//         console.log(imgRequired);

//         console.log(div);
//         // const neededImg = imgs[].querySelector('.custom');
//         // console.log(neededImg);
//         p = document.querySelectorAll('p');
//         console.log(p);
//         p = document.querySelector('p.pizza');
//         console.log(p);
//         const heading = document.querySelector('h2');
//         console.log(heading);
//         console.dir(heading);
//         console.dir(heading.textContent);
//         console.dir(heading.innerText);
//         // console.dir(heading.innerHTML);
//         // heading.innerHTML = `       NEW I am a heading
//         // <span>I am NEWLY hidden!</span>
//         // <style>
//         //   h2 {
//         //     color: green
//         //   }
//         // </style>`;
//         console.dir(heading.outerHTML);
//         heading.outerHTML = `<h3>
//         I am a heading
//         <span>I am hidden!</span>
//         <style>
//           h1 {
//             color: pink
//           }
//         </style>
//       </h1>`;
//         console.dir(heading.textContent);
//         console.dir(heading.innerText);

//         const pizzaMsg = 'This is how many pizzas I ate! ZERO! 🍕';

//         const pizzaList = document.querySelector('article p');
//         console.log(pizzaList.textContent);
//         pizzaList.textContent += `🍕`;
//         pizzaList.insertAdjacentText('beforebegin', `❤️`);
//         pizzaList.insertAdjacentText('afterbegin', `💦`);
//         pizzaList.insertAdjacentText('beforeend', `🥰`);
//         pizzaList.insertAdjacentText('afterend', `🎈`);

//         const myBody = document.querySelector('body');

//         console.log(myBody.textContent);
//         console.dir(myBody.textContent);
//         console.log(myBody.innerText);
// }

// document.addEventListener('DOMContentLoaded', init);

// Classes

const pic = document.querySelector('img.nice');

pic.classList.add('open');
pic.classList.remove('cool');

// pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
        pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'wasnt pup last time so I changed it';

console.log(pic.width);
console.log(pic.naturalWidth);

// window.addEventListener('load', function() {
//         console.log('window loaded later');
// });

// pic.addEventListener('load', function() {
//         console.log(pic.width);
//         console.log(pic.naturalWidth);
// });

pic.setAttribute('custom-fake-attribute', 781);

const larisaPic = document.querySelector('img.larisa');
console.log(larisaPic);
console.log(larisaPic.dataset);

larisaPic.addEventListener('click', function() {
        console.log(larisaPic.dataset);
        alert(`Welcome ${larisaPic.dataset.last} ${larisaPic.dataset.name}! Pleasure to have you here`);
});
