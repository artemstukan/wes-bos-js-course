const item = document.querySelector('.item');
console.log(item);

console.log(item.innerHTML);

const width = 301;
const imgSrc = `https://picsum.photos/${width}`;
const imgAlt = `cool pic! <h2> fake hacker </h2> <style>h2 {color: yellow}</style><img 
onload="console.log('HACKERS');
alert('YOu Have won 10K!');

" src="https://picsum.photos/50"></img>`;

const myHTML = `
<div class='wrapper'>
<h1>Hey! Artem is working here ${imgAlt}</h1>
<img src='${imgSrc}' alt='${imgAlt}'/>
</div>
`;

// console.log(typeof item.innerHTML);

// item.innerHTML = myHTML;

// console.log(typeof item.innerHTML);
// console.log(typeof myHTML);

// const itemImage = document.querySelector('.wrapper img');
// itemImage.className = 'round';

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

// myFragment.querySelector('.wrapper img');
// console.log(myFragment.querySelector('.wrapper img'));

// document.body.append(myHTML);

document.body.appendChild(myFragment);
