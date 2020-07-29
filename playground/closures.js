// function outer() {
//         // const outerVar = 'Hey I am an outer var. Or const. Or let';
//         let outerVar = 56;
//         return function inner() {
//                 const innerVar = 'Hey I am an inner var';
//                 console.log(innerVar);
//                 console.log(outerVar++);
//         };
// }
// const innerFn = outer();
// innerFn();

function createGreeting(greeting = '') {
        const myGreet = greeting.toUpperCase();
        console.log(myGreet);
        return function(name) {
                return `${myGreet} my friend ${name}`;
        };
}

const sayHello = createGreeting('hello');
const sayHi = createGreeting('hi');

console.log(sayHello('tanya'));

function createGame(gameName) {
        const myGame = gameName.toUpperCase();
        let score = 0;
        // return function win() {
        //         // score++;
        //         return `Your game ${myGame} score is ${score}`;
        // };
        function win() {
                return `Your have won =) Your game ${myGame} score is ${++score}`;
        }
        function lose() {
                return `You lost :( Your game ${myGame} score is ${--score}`;
        }
        return function(action) {
                switch (action) {
                        case 'win':
                                break;

                        case 'lose':
                                return lose();
                                break;

                        default:
                                return win();
                                break;
                }
                // return `Your game ${myGame} score is ${score}`;
        };
}

/*eslint-disable*/
