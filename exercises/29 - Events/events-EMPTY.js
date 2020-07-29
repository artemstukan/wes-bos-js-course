const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick(event) {
        console.log('handling it well 💃');
        console.log(this.textContent);
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);
butts.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(e) {
        console.log('Button clicked!');
        // console.log(parseFloat(event.target.dataset.price));
        console.log('target: ', e.target);
        console.log('currentTarget: ', e.currentTarget);
        // // Stop this event from bubbling up
        // event.stopPropagation();
}

buyButtons.forEach(function(button) {
        button.addEventListener('click', handleBuyButtonClick);
});

document.querySelectorAll('button.buy strong').forEach(function(number) {
        number.addEventListener('click', event => {
                console.log('Strong clicked!');
                console.log('target: ', event.target);
                console.log('currentTarget: ', event.currentTarget);
                console.log('type: ', event.type);
                console.log('bubbles: ', event.bubbles);
                event.stopPropagation();
                console.log('bubbles: ', event.bubbles);
        });
});

window.addEventListener(
        'click',
        function(event) {
                console.log('bubbles: ', event.bubbles);
                console.log('window clicked!');
                console.log('target: ', event.target);
                console.log('currentTarget: ', event.currentTarget);
                event.stopPropagation();
                event.target.remove();
        }
        // { capture: true }
);

// const evObj = document.createEvent('Events');
// evObj.initEvent('click', true, false);
// buyButtons[5].dispatchEvent(evObj);

const photoEl = document.querySelector('img.photo');

photoEl.addEventListener('mouseenter', e => {
        console.log(e.currentTarget);
        console.log(this);
});
