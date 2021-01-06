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

const students = [
        {
                id: '11ce',
                first_name: 'Dall',
                last_name: 'Puckring',
        },
        {
                id: '2958',
                first_name: 'Margarete',
                last_name: 'Brandi',
        },
        {
                id: '565a',
                first_name: 'Bendicty',
                last_name: 'Woodage',
        },
        {
                id: '3a16',
                first_name: 'Micki',
                last_name: 'Mattes',
        },
        {
                id: 'f396',
                first_name: 'Flory',
                last_name: 'Gladeche',
        },
        {
                id: 'de5f',
                first_name: 'Jamill',
                last_name: 'Emilien',
        },
        {
                id: '54cb',
                first_name: 'Brett',
                last_name: 'Aizikowitz',
        },
        {
                id: '9135',
                first_name: 'Lorry',
                last_name: 'Smallman',
        },
        {
                id: '978f',
                first_name: 'Gilly',
                last_name: 'Flott',
        },
];

const people = [
        {
                birthday: 'April 22, 1993',
                names: {
                        first: 'Keith',
                        last: 'Buckley',
                },
        },
        {
                birthday: 'January 3, 1975',
                names: {
                        first: 'Larry',
                        last: 'Heep',
                },
        },
        {
                birthday: 'February 12, 1944',
                names: {
                        first: 'Linda',
                        last: 'Bermeer',
                },
        },
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

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
        { type: 'shirt', price: 4000 },
        { type: 'pants', price: 4532 },
        { type: 'socks', price: 234 },
        { type: 'shirt', price: 2343 },
        { type: 'pants', price: 2343 },
        { type: 'socks', price: 542 },
        { type: 'pants', price: 123 },
];

/*
      Looping Methods
    */

function logToppings(topping, index, array) {
        console.log(' ---------------- ', index);
        console.log(`current topping: ${topping}`);
        if (index) {
                console.log(`prev topping: ${array[index - 1]}`);
        }
        if (index != array.length - 1) {
                console.log(`next topping: ${array[index + 1]}`);
        } else {
                console.log('goodbye!');
        }
}

function logToppings2(topping, index, array) {
        console.log(' ---------------- ', index);
        console.log(`current topping: ${topping}`);
        index ? console.log(`prev topping: ${array[index - 1]}`) : null;
        index != array.length - 1 ? console.log(`next topping: ${array[index + 1]}`) : console.log('goodbye!');
}

// toppings.forEach((el, i) => console.log(el + i));
toppings.forEach(logToppings2);

console.clear();

const newAr = toppings.map(el => el.toUpperCase()).map(el => `${el} fake`);

function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
}

function addStukan(word) {
        return `${word} Stukan`;
}

const nameAr = ['artem', 'tanya', 'larisa', 'igor'];
console.log(nameAr.map(capitalize).map(addStukan));

console.log(orderTotals);
const orderTotalsWithTax = orderTotals.map(total => Math.round(total * 1.2));
console.log(orderTotalsWithTax);

const cleanPeople = people.map(function(person) {
        console.log(person);
        const birthdayTS = new Date(person.birthday).getTime();
        const now = Date.now();
        const age = Math.floor((now - birthdayTS) / 31536000000);
        const birthday = age;
        // return { ...person, age };
        return {
                fullName: `${person.names.first} ${person.names.last}`,
                age,
        };
});

console.table(people);
console.table(cleanPeople);

const over40 = cleanPeople.filter(person => person.age >= 40);
console.table(over40);
console.clear();

function isStudent(student) {
        return student.id === '565a';
}

function findStudentById(id) {
        return function(student) {
                return student.id === id;
        };
}

function findStudentByProp(prop, value) {
        return function(student) {
                return student[prop] === value;
        };
}

const bestStudent = students.find(findStudentByProp('first_name', 'Lorry'));
console.table(bestStudent);
console.clear();

let total = 0;
orderTotals.forEach(el => {
        total += el;
});
console.log(total);

const orderTotalsSum = orderTotals.reduce((acc, value) => acc + value, 0);
console.log(orderTotalsSum);
console.clear();

// const inventoryCounts = inventory.reduce(((acc, value) => acc + value.price), 0);
// const inventorySting = inventory.reduce(((acc, value) => acc + value.type + ', '), '');
// console.log(inventoryCounts);
// console.log(inventorySting);

const inventoryCounts = inventory.reduce((acc, value) => {
        acc[value.type] = acc[value.type] ? acc[value.type] + 1 : 1;
        // if (acc[value.type]) {
        //         acc[value.type]++;
        // } else {
        //         acc[value.type] = 1;
        // }
        return acc;
}, {});

console.log(inventoryCounts);
console.clear();

const htmlTextCopy = `
Перейти к основному содержимому
Выбрать язык
Перейти к поиску
Технологии
Справочники и руководства
Оставить отзыв
Поиск на MDN
Поиск на MDN
Войти
Array.prototype.reduce()
Прочитайте Веб-технологии для разработчиковПрочитайте JavaScriptПрочитайте Справочник по JavaScriptПрочитайте Стандартные встроенные объектыПрочитайте ArrayArray.prototype.reduce()
Русский
▼
На этой странице
Синтаксис
Описание
Примеры
Полифилл
Спецификации
Совместимость с браузерами
Смотрите также
Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.


Синтаксис
array.reduce(callback[, initialValue])
Параметры
callback
Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
accumulator
Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).
currentValue
Текущий обрабатываемый элемент массива.
indexНеобязательный
Индекс текущего обрабатываемого элемента массива.
arrayНеобязательный
Массив, для которого была вызвана функция reduce.
initialValueНеобязательный
Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.
Описание
Метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.

При первом вызове функции, параметры accumulator и currentValue могут принимать одно из двух значений. Если при вызове reduce() передан аргумент initialValue, то значение accumulator будет равным значению initialValue, а значение currentValue будет равным первому значению в массиве. Если аргумент initialValue не задан, то значение accumulator будет равным первому значению в массиве, а значение currentValue будет равным второму значению в массиве.

Если массив пустой и аргумент initialValue не указан, будет брошено исключение TypeError. Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент initialValue не указан, или если аргумент initialValue указан, но массив пустой, то будет возвращено одно это значение, без вызова функции callback.

Предположим, что reduce() используется следующим образом:

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
Функция обратного вызова будет вызвана четыре раза, аргументы и возвращаемое значение при каждом вызове будут следующими:

previousValue	currentValue	index	array	возвращаемое значение
первый вызов	0	1	1	[0, 1, 2, 3, 4]	1
второй вызов	1	2	2	[0, 1, 2, 3, 4]	3
третий вызов	3	3	3	[0, 1, 2, 3, 4]	6
четвёртый вызов	6	4	4	[0, 1, 2, 3, 4]	10
Значение, возвращённое методом reduce() будет равным последнему результату выполнения функции обратного вызова (10).

Если же вы зададите начальное значение initialValue, результат будет выглядеть так:

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 10);
accumulator	currentValue	index	array	возвращаемое значение
первый вызов	10	0	0	[0, 1, 2, 3, 4]	10
второй вызов	10	1	1	[0, 1, 2, 3, 4]	11
третий вызов	11	2	2	[0, 1, 2, 3, 4]	13
четвёртый вызов	13	3	3	[0, 1, 2, 3, 4]	16
пятый вызов	16	4	4	[0, 1, 2, 3, 4]	20
Значение, возвращённое методом reduce() на этот раз, конечно же, будет равным 20.

Примеры
Суммирование всех значений в массиве
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
Суммирование значений в массиве объектов
Чтобы суммировать значения, содержащиеся в массиве объектов, вы должны указать initialValue, чтобы каждый элемент смог пройти через callback.

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, initialValue)
// sum == 6
Тоже самое, но со стрелочной функцией: 

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    initialValue
);
// sum == 6
Разворачивание массива массивов
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
// flattened равен [0, 1, 2, 3, 4, 5]
Пример: склеивание массивов, содержащихся в объектах массива, с использованием оператора расширения и initialValue
// friends - список из объектов(друзей) 
// где поле "books" - список любимых книг друга 
var friends = [ 
{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 }, 
{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
]

// allbooks - список, который будет содержать все книги друзей + 
// дополнительный список указанный в initialValue
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ["Alphabet"]);

// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace", 
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]
Полифилл
Метод Array.prototype.reduce() был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать reduce() в реализациях, которые не поддерживают этот метод.

// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.21
// Ссылка (en): http://es5.github.io/#x15.4.4.21
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.21
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback/*, initialValue*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k < len && ! (k in t)) {
        k++; 
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
Спецификации
Спецификация	Статус	Комментарии
ECMAScript 5.1 (ECMA-262)
Определение 'Array.prototype.reduce()' в этой спецификации.	Стандарт	Изначальное определение. Реализована в JavaScript 1.8.
ECMAScript 2015 (6th Edition, ECMA-262)
Определение 'Array.prototype.reduce()' в этой спецификации.	Стандарт	
ECMAScript (ECMA-262)
Определение 'Array.prototype.reduce()' в этой спецификации.	Живой стандарт	
Совместимость с браузерами
Update compatibility data on GitHub
Компьютеры	Мобильные	Server
Chrome	Edge	Firefox	Internet Explorer	Opera	Safari	Android webview	Chrome для Android	Firefox для Android	Opera для Android	Safari on iOS	Samsung Internet	Node.js
reduce	Полная поддержка3	Полная поддержка12	Полная поддержка3	Полная поддержка9	Полная поддержка10.5	Полная поддержка5	Полная поддержка≤37	Полная поддержка18	Полная поддержка4	Полная поддержка14	Полная поддержка4	Полная поддержка1.0	Полная поддержка0.1.100





What are we missing?
Легенда
Полная поддержка 
Полная поддержка
Смотрите также
Array.prototype.reduceRight()
Metadata
Последнее изменение: 14 авг. 2019 г., помощниками MDN
Связанные темы
Стандартные встроенные объекты
Array
Свойства
Array.length
Array.prototype[@@unscopables]
Методы
Array.from()
Array.isArray()
Array.of()
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries()
Array.prototype.every()
Array.prototype.fill()
Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.flat()
Array.prototype.flatMap()
Array.prototype.forEach()
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
Array.prototype[@@iterator]()
get Array[@@species]
Наследование:
Function
Свойства
Function.arguments
Function.caller
Function.displayName
Function.length
Function.name
Методы
Function.prototype.apply()
Function.prototype.bind()
Function.prototype.call()
Function.prototype.toSource()
Function.prototype.toString()
Object
Свойства
Object.prototype.__proto__
Object.prototype.constructor
Методы
Object.prototype.__defineGetter__()
Object.prototype.__defineSetter__()
Object.prototype.__lookupGetter__()
Object.prototype.__lookupSetter__()
Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf()
Object.prototype.propertyIsEnumerable()
Object.prototype.toLocaleString()
Object.prototype.toSource()
Object.prototype.toString()
Object.prototype.valueOf()
Object.setPrototypeOf()
Изучите лучшие материалы по Веб-разработке
Получайте самые последние важные новости от MDN прямо в ваш почтовый ящик.

В настоящий момент рассылка доступна только на английском языке.


Эл. почта
email@test.ru
Подписаться сейчас
Скрыть подписку на новостную рассылку
Веб-документация MDN
Веб-технологии
Изучение Веб-разработки
О MDN
Оставить отзыв
О нас
MDN Web Docs Store
Обратная связь
Firefox
MDN
Mozilla
© 2005-2020 Mozilla and individual contributors. Content is available under these licenses.

Условия использования
Конфиденциальнсть
Куки
`;

console.log(htmlTextCopy.length);

// const letterMap = new Map();
// const letterSet = new Set();
// htmlTextCopy.split('').forEach(function(letter) {
//         letterMap.set(letter, letterMap.has(letter) ? letterMap.get(letter) + 1 : 1);
//         letterSet.add(letter);
// });

// console.log(letterMap);
// console.log(Array.from(letterMap));

// console.log(letterSet);
// console.log(Array.from(letterSet));

console.log('NOW THE RIGHT WAY?');
// const reducedAr = htmlTextCopy.split('').reduce((accArray, letter) => [...accArray, ...letter], []);
// console.log(reducedAr);
// console.log(reducedAr.length);

// const reducedObj = htmlTextCopy.split('').reduce((accArray, letter) => {
//         accArray[letter] = accArray[letter] ? accArray[letter] + 1 : 1;
//         return accArray;
// }, {});
// console.log(reducedObj);
// console.log(Object.entries(reducedObj).length);

function isValidCaracter(char) {
        // (letter >= 'A' && letter <= 'z') || (letter >= 'А' && letter <= 'я')
        return char.match(/[a-zа-я0-9]/i);
}

function transformToLowerCase(char) {
        return char.toLowerCase();
}

const uniqueCharCounter = (accArray, letter) => {
        accArray[letter] = accArray[letter] ? accArray[letter] + 1 : 1;
        return accArray;
};

// const result = mdnTextAr.filter(letter =>
//         // (letter >= 'A' && letter <= 'z') || (letter >= 'А' && letter <= 'я')
//         letter.match(/[a-zа-я]/i)
// );

// const mdnTextAr = htmlTextCopy.split('');
// const mdnTextAr = htmlTextCopy.split('').map(letter => letter.toLowerCase());

const result = htmlTextCopy
        .split('')
        .filter(isValidCaracter)
        .map(transformToLowerCase)
        .reduce(uniqueCharCounter, {});
console.log(result.length);

// const reducedObj = result.reduce((accArray, letter) => {
//         accArray[letter] = accArray[letter] ? accArray[letter] + 1 : 1;
//         return accArray;
// }, {});
console.log(result);
console.log(Object.entries(result).length);

const toSortResults = (a, b) => b[1] - a[1];
const sortedResults = Object.entries(result).sort(toSortResults);

console.log(sortedResults); 
