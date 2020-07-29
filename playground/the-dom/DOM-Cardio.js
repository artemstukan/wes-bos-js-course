console.log('cardio');

// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them
const listAr = ['one', 'two', 'three'];
listAr.forEach(function(el) {
        const newLi = document.createElement('li');
        newLi.innerText = el;
        myList.appendChild(newLi);
});

// put that list into the above wrapper
myDiv.appendChild(myList);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = `https://picsum.photos/600`;

// set the width to 250
myImg.width = 250;
myImg.height = 250;

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTMLString = `
<div class='with-paragraphs'>
<p>It is the first paragraph</p>
<p>It is the second paragraph</p>
</div>
`;

const myHTMLFragemnt = document.createRange().createContextualFragment(myHTMLString);

// put this div before the unordered list from above
// myList.insertAdjacentHTML('beforebegin', myHTMLString); OR
document.body.appendChild(myHTMLFragemnt);
const divWithParagraphsEl = document.querySelector('.with-paragraphs');
myList.insertAdjacentElement('beforebegin', divWithParagraphsEl);

// add a class to the second paragraph called warning
divWithParagraphsEl.querySelector('p').classList.add('warning');

// remove the first paragraph
divWithParagraphsEl.querySelector('p:last-child');
divWithParagraphsEl.querySelector('p:not(.warning)').remove();
// divWithParagraphsEl.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
// function generatePlayerCard(name, age, height) {
function generatePlayerCard(params) {
        const [name, age, height] = params; // Can I make it better?
        const ageInDogYears = Math.round(age * 7);
        return `<div class="playerCard">
                <h2>${name} — ${age}</h2>
                <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
            </div>`;
}

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('class');

// Have that function make 4 cards
// function Card(name, age, height) {
function Card(params) {
        [this.name, this.age, this.height] = params; // Can I make it better?
}
const cardsArray = [['Dodo', 35, 158], ['Kitty', 18, 169], ['Mike', 24, 198], ['Oprah', 65, 168]];

// append those cards to the div
// cardsArray.forEach(card => console.log(card));
for (const card of cardsArray) {
        // const newCardObj = new Card(card);
        // console.log(newCardObj);
        cardsDiv.insertAdjacentHTML('beforeend', generatePlayerCard(card));
}

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardsDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
document.querySelectorAll('.playerCard').forEach(el => {
        console.log(el);
        const deleteButtonElHTMLString = `<button class='delete-button' type='button'>&times Delete this player</button>`;
        el.insertAdjacentHTML('beforeend', deleteButtonElHTMLString);
});

// select all the buttons!
// make out delete function
// loop over them and attach a listener
function deleteCard(event) {
        console.log('DELETE!');
        // event.currentTarget.parentElement.remove();
        event.currentTarget.closest('.playerCard').remove();
}
document.querySelectorAll('.delete-button').forEach(button => {
        console.log(button);
        const buttonParent = button.parentElement;
        // button.addEventListener('click', function() {
        //         buttonParent.remove();
        // });
        button.addEventListener('click', deleteCard);
});
