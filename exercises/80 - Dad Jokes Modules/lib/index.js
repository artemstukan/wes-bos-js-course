import { wait } from './utils.js';

const userEndpoint = 'https://icanhazdadjoke.com';

export async function fetchJoke(loader) {
        loader.classList.remove('hidden');
        const response = await fetch(`${userEndpoint}`, { headers: { Accept: 'application/json' } });

        if (response.status === 200) {
                const responseData = await response.json();
                return responseData;
        }
        // return response.status;
}
