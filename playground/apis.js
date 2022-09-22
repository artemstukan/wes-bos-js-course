// const endpoint = 'http://www.recipepuppy.com/api/?q=pizza';
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// const endpoint = 'https://kindle-nn.ru';
const userEl = document.querySelector('.user');

async function displayUser(username) {
        userEl.textContent = 'Loading...';

        // const wesBosProfilePromise = await fetch(endpoint);
        const response = await fetch(`${usersEndpoint}/${username}`);
        const data = await response.json();
        console.log(data);
        userEl.textContent = `${data.name} - ${data.blog}`;
}

function handleError(error) {
        console.log('Error that we handle now: ');
        console.log(error);
        userEl.textContent = `Something went wrong: ${error}`;
}

displayUser('wesbos').catch(handleError);
