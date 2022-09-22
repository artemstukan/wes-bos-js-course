// import 'regenerator-runtime/runtime';

import buttonText from '../data/buttonText.js';
import { fetchJoke } from './index.js';
import { textOnButton, jokeHolder, loader } from '../elements.js';
import { recursiveRandomItemFromArray } from './utils.js';

export async function handleClick() {
        // loader.classList.remove('hidden');
        textOnButton.classList.add('hidden');

        const { joke } = await fetchJoke(loader);

        textOnButton.innerHTML = recursiveRandomItemFromArray(buttonText, textOnButton.innerHTML);
        jokeHolder.innerHTML = joke;
        loader.classList.add('hidden');
        textOnButton.classList.remove('hidden');
}
