const proxy = `https://cors-anywhere.herokuapp.com/`;
// const userEndpoint = 'https://excuser.herokuapp.com/v1/excuse';
const userEndpoint = 'https://fakerapi.it/api/v1/books?_quantity=';
// const userEndpoint = 'https://www.breakingbadapi.com/api/';

const formEl = document.querySelector('form.search');
const booksGrid = document.querySelector('.books');
const submitButton = document.querySelector('button.submit');

function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchBooks(query) {
        const response = await fetch(`${userEndpoint}${query}`);
        // debugger;
        // const response = await fetch(`${proxy}${userEndpoint}${query}`);

        if (response.status === 200) {
                const responseData = await response.json();
                return responseData.data;
        }
        return response.status;
}

async function displayBooks(books) {
        const html = books.map(
                book => `<div class='book'>
                <h2>${book.title}</h2>
                <span>${book.author}</span>
                <span>${book.genre}</span>
                <p>${book.description}</p>
                <img src=${book.image} alt="${book.title}">
        </div>`
        );
        console.log(html);
        booksGrid.innerHTML = html.join('');
        // books.forEach(book => {
        //         const htmlBookEl = `<div class='book'>
        //         <h2>${book.title}</h2>
        //         <span>${book.author}</span>
        //         <span>${book.genre}</span>
        //         <p>${book.description}</p>
        //         <img src=${book.image} alt=${book.title}>
        // </div>`;
        //         const bookEl = document.createElement('div');
        //         bookEl.innerHTML = htmlBookEl;
        //         booksGrid.appendChild(bookEl);
        // });
        // for (const index in books) {
        //         // console.log(books[index]);
        //         const htmlBookEl = `<div class='book'>
        //         <h2>${books[index].title}</h2>
        //         <span>${books[index].author}</span>
        //         <span>${books[index].genre}</span>
        //         <p>${books[index].description}</p  >
        //         <img src=${books[index].image} alt="${books[index].title}">
        // </div>`;
        //         const bookEl = document.createElement('div');
        //         bookEl.innerHTML = htmlBookEl;
        //         booksGrid.appendChild(bookEl);
        //         await wait(500);
        // }
}

async function fetchAndDisplay(numberOfBooks) {
        formEl.submit.disabled = true;
        const query = formEl.query.value;
        displayBooks(await fetchBooks(query));
        formEl.submit.disabled = false;
        displayBooks(await fetchBooks(numberOfBooks));
}

async function handleSubmit(event) {
        event.preventDefault();
        fetchAndDisplay(formEl.query.value);
}

formEl.addEventListener('submit', handleSubmit);

fetchAndDisplay(10);
