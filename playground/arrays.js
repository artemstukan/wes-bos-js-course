const names = ['artem', 'tanya', 'stepan'];
const namesPlus = ['wonders', ...names, 'lux'];
console.log(names);
console.log(namesPlus);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.splice(3, 2));

const slicedAr = numbers.slice(2, 6);
console.log(slicedAr);
console.log(numbers);

// const reversedAr = [...numbers].reverse();
// console.log(reversedAr);
// console.log(numbers);

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [...bikes.slice(0, 2), 'benotto', ...bikes.slice(2)];
console.log(newBikes);

const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)];
// delete newBikes2[1];
newBikes2.splice(1, 1);
console.log(newBikes2);

const comments = [
        { text: 'Cool Beans', id: 123 },
        { text: 'Love this', id: 133 },
        { text: 'Neato', id: 233 },
        { text: 'good bikes', id: 333 },
        { text: 'so good', id: 433 },
];

// function deleteComment(id, comments) {
//         function matchId(element) {
//                 return element.id === id;
//         }
//         const positionEl = comments.find(matchId);
//         const positionIndex = comments.indexOf(positionEl);
//         const returnedAr = [...comments];
//         returnedAr.splice(positionIndex, 1);
//         return returnedAr;
// }

// function deleteComment(id, comments) {
//         let position;
//         for (let i = 0; i <= comments.length; i++) {
//                 if ((comments[i], id === id)) {
//                         position = i;
//                         break;
//                 }
//         }
//         const returnedAr = [...comments];
//         returnedAr.splice(position , 1);
//         return returnedAr;
// }

function deleteComment(id, comments) {
        // function matchId(element) {
        //         return element.id === id;
        // }
        const positionIndex = comments.findIndex(el => el.id === id);
        // eslint-disable-next-line
        // const positionIndex = comments.findIndex(el => {
        //         return el.id === id;
        // });
        // const positionIndex = comments.findIndex(matchId);
        const returnedAr = [...comments];
        returnedAr.splice(positionIndex, 1);
        return returnedAr;
}

const id = 123;

const newComments = deleteComment(id, comments);
console.log(comments);
console.log(newComments);
