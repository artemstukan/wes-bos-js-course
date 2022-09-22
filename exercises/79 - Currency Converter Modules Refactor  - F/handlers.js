import { fromSelect, fromInput, toSelect, toEl } from './elements.js';
import { convert } from './lib.js';
import { formatCurrency } from './utils.js';

export async function handleInput(event) {
        const fromCurrency = fromSelect.value.toLowerCase();
        if (event.target !== fromInput) {
                fromInput.value = formatCurrency(fromInput.dataset.unformattedValue, fromCurrency);
        } else {
                fromInput.dataset.unformattedValue = fromInput.value;
        }
        const toCurrency = toSelect.value.toLowerCase();
        const rawAmount = await convert(fromInput.dataset.unformattedValue, fromCurrency, toCurrency);
        toEl.textContent = formatCurrency(rawAmount, toCurrency);
}

export function handleBlur(event) {
        console.log('blurred!');
        fromInput.type = 'text';
        fromInput.dataset.unformattedValue = fromInput.value;
        fromInput.value = formatCurrency(fromInput.value, fromSelect.value);
}

export function handleFocus(event) {
        fromInput.type = 'number';
        fromInput.value = fromInput.dataset.unformattedValue;
}
