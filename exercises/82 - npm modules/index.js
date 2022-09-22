import wait from 'waait';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { format, formatDistance, subDays, locale } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
// import lodash from 'lodash';

import axios from 'axios';
// import { intersection, isEqual } from 'lodash';

import to from 'await-to-js';

// console.log(`Hello ${faker.name.firstName()}`);
// const fakeNames = Array.from({ length: 10 }, () => `${faker.name.firstName()}  ${faker.name.lastName()}`);
// console.log(fakeNames);

// async function go() {
//         console.log('Going');
//         await wait(200);
//         console.log('ending');
// }

// go();

// console.log(format(new Date(), "'Today is a' eeee"));
// console.log(formatDistance(subDays(new Date(), 8), new Date(), { addSuffix: true }));

// const date = new Date();
// // 'January the 12th 2022';

// console.log(format(date, `MMMM 'the' do y`));
// console.log(format(new Date(2017, 10, 6), 'do MMMM', { locale: ruLocale }));
// console.log(format(new Date(2017, 10, 6), 'do LLLL', { locale: ruLocale }));

// async function getJoke() {
//         const { data } = await axios.get('https://icanhazdadjoke.com/', {
//                 headers: {
//                         Accept: 'application/json',
//                 },
//         });
//         console.log('from inside the function: ', data.joke);
// }

// getJoke();

// console.log(_.intersection([5, 1], [2, 3, 1]));
// console.log(intersection([5, 1], [2, 3, 1]));

// const person1 = { name: 'artem' };
// const person2 = { name: 'artem' };
// console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
        return new Promise(function(resolve, reject) {
                if (firstName === 'Artem') {
                        return resolve('Cool name');
                }
                reject(new Error('Not cool name'));
        });
}

// checkIfNameIsCool('Artem').then(console.log);

async function checkName() {
        const [err, successValue] = await to(checkIfNameIsCool('Artem'));
        console.log(err);
        console.log(successValue);
}

checkName();
