import currencies from './currencies.js';
import { handleInput, handleBlur, handleFocus } from './handlers.js';
import { generateOptions } from './utils.js';
import { fromSelect, toSelect, fromInput } from './elements.js';

export function init() {
        const form = document.querySelector('.app form');

        const optionsHTML = generateOptions(currencies);

        fromSelect.innerHTML = optionsHTML;
        toSelect.innerHTML = optionsHTML;

        form.addEventListener('input', handleInput);

        fromInput.addEventListener('blur', handleBlur);
        fromInput.addEventListener('focus', handleFocus);
}
