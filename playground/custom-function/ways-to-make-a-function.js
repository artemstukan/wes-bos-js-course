console.log('ways to make');

console.log(doctorize('Artem'));

function doctorize(name) {
        return `Dr. ${name}`;
}

const doctorize2 = function(name) {
        return `Dr. ${name}`;
};

/* eslint-disable */
const inchesToCM = (inches = 5) => inches * 2.45;

const add = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

(function() {
        console.log('`Dr. Martha` was returned');
        return `Dr. Martha`;
})()

const api = {
    yell: function(name = 'tanya') {
        console.log(name.toUpperCase())
    },
    yellDefault() {
        console.log('momentum is great'.toUpperCase())
    }
};

const button = document.querySelector('.clickMe');
// button.addEventListener('click', function() {
//     console.log('great clicking!')
// });
button.addEventListener('click', () => {
    console.log('great clicking!')
});

setTimeout(api.yellDefault, 3000);