// const age = 64;
// const person = {
//         age,
//         name: 'artem',
//         'cool-dude': true,
//         sayHello(greeting = this.name) {
//                 return `${greeting.toUpperCase()} ${this.name}`;
//         },
// };
// console.log(person);

// const nameInput = document.querySelector('[name="first"]');
// console.log(nameInput);
// const nameFromInput = nameInput ? nameInput.value : 'artem!';
// console.log(nameFromInput);

// console.log(person);
// delete person.name;
// console.log(person);

// const name1 = 'wes';
// const name2 = 'wes';

// const person2 = {
//         first: 'wes',
//         last: 'bos',
// };
// const person1 = {
//         first: 'artem',
//         last: 'stukan',
//         sister: {
//                 first: 'tanya',
//                 last: 'stukan',
//         },
// };

// // const person3 = { ...person1 };
// // const person3 = _.clone(person1);
// const person3 = _.cloneDeep(person1);

// person3.last = 'updatedArtem';
// person3.sister.last = 'updatedTanya';
// console.log(person1);
// console.log(person3);

const meatInventory = {
        bacon: 2,
        sausage: 3,
        soda: 4,
};

const veggieInventory = {
        lettuce: 5,
        tomatoes: 3,
        soda: 3,
};

const inventory = {
        ...meatInventory,
        ...veggieInventory,
        oysters: 10,
        bacon: 89,
};
console.log(inventory);

function doStuff(data) {
        data = 'something else';
}

function doStuffObj(data) {
        data.value = 'something else';
}

const myData = 'secret password';
doStuff(myData);
console.log(myData);

const myDataObj = {
        value: 'secret pasw',
};
doStuffObj(myDataObj);
console.log(myDataObj);
