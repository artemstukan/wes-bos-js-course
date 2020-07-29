const toppings = [
        'Mushrooms ',
        'Tomatoes',
        'Eggs',
        'Chili',
        'Lettuce',
        'Avocado',
        'Chiles',
        'Bacon',
        'Pickles',
        'Onions',
        'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
        beyond: 10,
        beef: 5,
        pork: 7,
};

const prices = {
        hotDog: 453,
        burger: 765,
        sausage: 634,
        corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
        { comment: 'Love the burgs', rating: 4 },
        { comment: 'Horrible Service', rating: 2 },
        { comment: 'Smoothies are great, liked the burger too', rating: 5 },
        { comment: 'Ambiance needs work', rating: 3 },
        { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

/*
      Static Methods
    */

// Array.of();

const arrayOf = Array.of('mama', 'papa', 'me', 'cat');
// console.log(arrayOf);

// Make a function that creates a range from x to y with Array.from();
function createArrayFromXtoY(x, y) {
        // const newAr = [];
        // for (let i = x; i <= y; i++) {
        //         newAr.push(i);
        // }
        const newAr = Array.from({ length: y - x + 1 }, (_, i) => i + x);
        return newAr;
}
// console.log(createArrayFromXtoY(14, 51));

// Check if the last array you created is really an array with Array.isArray();

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
// console.log(meats);
// const meatEntries = Object.entries(meats);
// console.log('entries: ', meatEntries);

// const meatKeys = Object.keys(meats);
// console.log('keys: ', meatKeys);

// const meatValues = Object.values(meats);
// console.log('values: ', meatValues);

// Object.entries(meats).forEach(([key, value]) => {
//         console.log(key, value);
// });

/*
      Instance Methods
    */

// Display all bun types with " or " - use join()

// console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string

// const streetFood = 'hot dogs,hamburgers,sausages,corn';
// console.log(streetFood);
// console.log(streetFood.split(','));

// take the last item off toppings with pop()
// console.log(toppings);
// const tempTopping = toppings.pop();
// console.log(toppings);
// toppings.push(tempTopping);
// console.log(toppings);
// add it back with push()
// take the first item off toppings with shift()
// console.log(toppings);
// const tempTopping = toppings.shift();
// console.log(toppings);
// toppings.unshift(tempTopping);
// console.log(toppings);
// add it back in with unshift()
// Do the last four,but immutable (with spreads and new variables)
const newToppings = [...toppings];
// newToppings.shift();
// console.log(newToppings);

// Make a copy of the toppings array with slice()
// Make a copy of the toppings array with a spread
// take out items 3 to 5 of your new toppings array with splice()
// console.log(newToppings.splice(3, 3));
// console.log(newToppings);
// // find the index of Avocado with indexOf() / lastIndexOf()
// newToppings.push('Avocado');
// const avoIndex = newToppings.indexOf('Avocado');
// console.log(avoIndex);

// const avoIndexLast = newToppings.lastIndexOf('Avocado');
// console.log(avoIndexLast);
// // Check if hot sauce is in the toppings with includes()
// console.log(newToppings.includes('Hot sauce'));
// console.log(newToppings.includes('Bacon'));

// // add it if it's not
// // flip those toppings around with reverse()
// console.log(newToppings);
// console.log(newToppings.reverse());
// console.log(newToppings);
/*
      Callback Methods
    */

// // find the first rating that talks about a burger with find()
// const findBurgRatingFunc = singleFeedback => singleFeedback.comment.includes('BURGERS');
// const findSmoothieRatingFunc = singleFeedback => singleFeedback.comment.includes('Smoothies');
// function findCommentWithWordFunc(word) {
//         return singleFeedback => singleFeedback.comment.includes(word);
// }
// // // console.log(feedback.find(findSmoothieRatingFunc));
// // console.log(feedback.find(findCommentWithWordFunc('Service')));

// // find all ratings that are above 2 with filter()
// // function filterByMinRating(value) {
// //         return item => item.rating > value;
// // }
// // const filteredFeedback = feedback.filter(item => item.rating > 2);
// // console.table(filteredFeedback);

// // const filteredFeedback2 = feedback.filter(filterByMinRating(2));
// // console.table(filteredFeedback2);

// // // find all ratings that talk about a burger with filter()
// function filterByWord(word) {
//         return item => item.comment.toLowerCase().includes(word);
// }

// // const burgerFeedback = feedback.filter(filterByWord('burger'));
// const burgerFeedback = feedback.filter(findCommentWithWordFunc('burg'));
// console.table(burgerFeedback);

// // Remove the one star rating however you like!
// const notOneStarRatings = feedback.filter(item => item.rating > 1);
// console.log(notOneStarRatings);

// check if there is at least 5 of one type of meat with some()
console.log(Object.values(meats).some(el => el >= 5));

// make sure we have at least 3 of every meat with every()
console.log(Object.values(meats).every(el => el >= 3));

// sort the toppings alphabetically with sort()
console.log([...toppings].sort());

// sort the order totals from most expensive to least with .sort()
console.log([...orderTotals].sort((a, b) => a - b));

// Sort the prices with sort()
console.log([...feedback].sort((a, b) => a.rating - b.rating));

const tempArFromObj = Object.entries(prices).sort((a, b) => a[1] - b[1]);
console.log(Object.fromEntries(tempArFromObj));

/*
      Looping Methods (next)
    */
