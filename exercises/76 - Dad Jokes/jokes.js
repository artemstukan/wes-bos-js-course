const jokeButton = document.querySelector('.getJoke');
const textOnButton = document.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const userEndpoint = 'https://icanhazdadjoke.com';

const buttonText = [
        'Ugh.',
        '🤦🏻‍♂️',
        'omg dad.',
        'you are the worst',
        'seriously',
        'stop it.',
        'please stop',
        'that was the worst one',
];

function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJoke() {
        const response = await fetch(`${userEndpoint}`, { headers: { Accept: 'application/json' } });

        if (response.status === 200) {
                const responseData = await response.json();
                return responseData;
        }
        // return response.status;
}

function generateRandomNumber(max) {
        return Math.floor(max * Math.random());
}

function recursiveRandomItemFromArray(arr, not) {
        const item = arr[generateRandomNumber(arr.length)];
        if (item === not) {
                return recursiveRandomItemFromArray(arr, not);
        }
        return item;
}

async function handleClick(event) {
        loader.classList.remove('hidden');
        textOnButton.classList.add('hidden');

        await wait(2000);
        const { joke } = await fetchJoke();

        textOnButton.innerHTML = recursiveRandomItemFromArray(buttonText, textOnButton.innerHTML);
        jokeHolder.innerHTML = joke;
        loader.classList.add('hidden');
        textOnButton.classList.remove('hidden');
}

jokeButton.addEventListener('click', handleClick);
