import { handleResult } from './handlers.js';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
        console.log('inside');
        if (!('SpeechRecognition' in window)) {
                console.log('doesnt support it');
                return;
        }
        console.log('have it');
        const recognition = new window.SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = handleResult;
        recognition.start();
        console.log({ recognition });
        handleResult();
}

start();
