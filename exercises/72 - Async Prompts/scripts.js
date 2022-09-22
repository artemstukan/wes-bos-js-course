function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
        popup.classList.remove('open');
        await wait(1000);
        popup.remove();
        // eslint-disable-next-line no-param-reassign
        popup = null;
}

function ask(options) {
        return new Promise(async function(resolve) {
                // debugger;
                const popup = document.createElement('form');
                popup.classList.add('popup');
                popup.insertAdjacentHTML(
                        'afterbegin',
                        `<fieldset>
                <label>
                    ${options.title}
                </label>
                <input type="text" name="onlyInput"/>
                <button type="submit">Submit</button>
                </fieldset>`
                );

                if (options.cancel) {
                        const skipButton = document.createElement('button');
                        skipButton.type = 'button';
                        skipButton.textContent = 'Cancel';
                        skipButton.addEventListener(
                                'click',
                                () => {
                                        resolve(null);
                                        destroyPopup(popup);
                                },
                                { once: true }
                        );
                        popup.firstElementChild.appendChild(skipButton);
                }

                document.body.appendChild(popup);
                await wait(0);
                popup.classList.add('open');

                popup.addEventListener(
                        'submit',
                        ev => {
                                ev.preventDefault();
                                resolve(ev.target.onlyInput.value);
                                destroyPopup(popup);
                        },
                        { once: true }
                );
        });
}

// ask({ title: 'Age?', cancel: true });

async function askQuestion(e) {
        const button = e.currentTarget;
        const answer = await ask({ title: button.dataset.question, cancel: 'cancel' in button.dataset });
        console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
        { title: 'What is your name?' },
        { title: 'What is your age?', cancel: true },
        { title: 'What is your dogs name?' },
];

// Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(console.log);

// Promise.all(questions.map(ask)).then(console.log);

// Promise.all(questions.map(ask)).then(data => {
//         console.log(data);
// });

// questions.forEach(async function(question) {
//         console.log('running ', question.title);
//         const answer = await ask(question);
// });

async function asyncMap(array, callback) {
        const results = [];
        for (const item of array) {
                results.push(await callback(item));
        }
        return results;
}

async function askMany() {
        for (const question of questions) {
                const answer = await ask(question);
        }
}

// askMany();
// const answers = asyncMap(questions, ask);
// console.log(answers);

async function go() {
        const answers = await asyncMap(questions, ask);
        console.log(answers);
}

go();
