import { colors } from './colors.js';

function logWords(results) {
        // debugger;
        console.log(results[results.length - 1][0].transcript);
        console.log(colors);
}

export function handleResult(event) {
        if (event) logWords(event.results);
}
