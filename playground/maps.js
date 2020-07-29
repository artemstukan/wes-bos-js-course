console.log('maps');

const myMap = new Map();
console.log(myMap);
myMap.set({ city: 'N. Novgorod' }, { population: 1150000 });
console.log(myMap);

const prizes = new Map();
prizes.set(100, 'cup');
prizes.set(200, 'plate');
prizes.set(300, 'pot');

console.log(prizes.values());

console.log('new');

const ul = document.querySelector('.prizes');
prizes.forEach((key, value) => {
        console.log(key);
        console.log(value);
});

for (const [pointsValue, prizeItem] of prizes) {
        console.log(pointsValue, prizeItem);
        const li = `<li>${pointsValue}</li>`;
        ul.insertAdjacentHTML('beforeend', li);
}

const otherMap = new Map([['age', 25], ['height', 160], ['weight', 67]]);
console.log(otherMap);

for (const [pointsValue, prizeItem] of otherMap) {
        console.log(pointsValue, prizeItem);
        const li = `<li>${pointsValue}</li>`;
        ul.insertAdjacentHTML('beforeend', li);
}
