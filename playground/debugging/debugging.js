const people = [
        { name: 'Wes', cool: true, country: 'Canada' },
        { name: 'Scott', cool: true, country: 'Merica' },
        { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
        // console.log(person.name);
        // console.group(`${person.name}`);
        // console.log(`${person.name}`);
        // console.table(`${person.cool}`);
        // console.error(`${person.country}`);
        // console.warn(`That is it folks`);
        // console.groupEnd(`${person.name}`);

        // debugger;
        console.log(person.name);
});

// Console Methods

// console.groupCollapsed('my first console group!!!');

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
        console.count(`counter for ${name}`);
        return `Dr. ${name}`;
}

function greet(name) {
        doesntExist();
        return `Hello ${name}`;
}

function go() {
        const name = doctorize(greet('Wes'));
        console.log(name);
}

function bootstrap() {
        console.log(`ok i am in bootstrap`);
        go();
}

// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
        const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
        e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
        const res = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                        Accept: 'text/plain',
                },
        });
        const joke = await res.text();
        console.log(joke);
        return joke;
}
