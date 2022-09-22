// console.log('works');

function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
        return Math.floor(randomNumber * (max - min) + min);
}

console.log('immediate');
// wait(2000).then(() => console.log('after 2s'));

// async for of loop
// async function draw(el) {
//         const text = el.textContent;
//         let soFar = '';
//         el.textContent = soFar;
//         for (const letter of text) {
//                 soFar += lett  er;
//                 el.textContent = soFar;
//                 const { typeMin, typeMax } = el.dataset;
//                 await wait(getRandomBetween(typeMin, typeMax));
//         }
// }

function draw(el) {
        let index = 0;
        const text = el.textContent;
        const { typeMin, typeMax } = el.dataset;

        async function drawLetter() {
                // el.textContent += text[index];
                el.textContent = text.slice(0, index);
                index += 1;
                await wait(  (typeMin, typeMax));
                if (index <= text.length) drawLetter();
        }

        drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);
