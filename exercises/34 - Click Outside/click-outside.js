const cardButtons = document.querySelectorAll('.card button');
console.log(cardButtons);

const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
        const button = event.currentTarget;
        const card = button.closest('.card');
        const imgSrc = card.querySelector('img').src;
        const desc = card.dataset.description;
        // const name = desc.split(' ')[0];
        const name = card.querySelector('h2').textContent.split(' ')[0];
        console.log(desc);
        modalInner.innerHTML = `
        <img width="600" hieght="600" src="${imgSrc.replace('200', '600')}"></img>
        <p>${desc}</p>
        <div> PRANK! ${desc} ${name}</div>
        `;
        modalOuter.classList.add('open');
        modalOuter.addEventListener('click', closeModal);
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal(event) {
        const isOutside = !event.target.closest('.modal-inner');
        console.log(isOutside);

        if (isOutside) {
                modalOuter.classList.remove('open');
        }
}

window.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
                modalOuter.classList.remove('open');
        }
});
