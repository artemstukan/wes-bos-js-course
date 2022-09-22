import myFirstName, { returnHi as sayMyName, lastName } from './utils.js';
import * as everything from './artem.js';
import { handleButtonClick } from './handlers.js';

const button = document.querySelector('button');

console.log(button);
// button.innerHTML = 'fake';

button.addEventListener('click', handleButtonClick);
