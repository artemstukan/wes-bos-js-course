const myStorage = window.localStorage;
const TODO_LIST_NAME = 'todoList';

const shoppingForm = document.querySelector('form.shopping');
const list = document.querySelector('.list');

let items = [];

function displayItems() {
        const html = items
                .map(
                        item => `<li class='shopping-item'>
                                    <input value="${item.id}" type='checkbox' ${item.complete ? 'checked' : ''}></input>
                                    <span class='itemName'>${item.name}</span>
                                    <button 
                                        value="${item.id}"
                                        aria-label="Remove ${item.name}"
                                                >&times;
                                    </button>
                                </li>`
                )
                .join('');
        list.innerHTML = html;
}

function handleSubmit(e) {
        e.preventDefault();
        const name = e.currentTarget.item.value;

        if (!name) return;

        const item = {
                name,
                id: Date.now(),
                complete: false,
        };

        items.push(item);
        console.log(`You now have ${items.length} in your state`);
        e.target.reset(); // clear the form

        // fire off a custom event that will tell anyone who subscribes
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function mirrorToLocalStorage() {
        myStorage.setItem(TODO_LIST_NAME, JSON.stringify(items));
}

function restoreFromLocalStorage() {
        console.log('Restoring from LS');
        const tempItems = JSON.parse(myStorage.getItem(TODO_LIST_NAME));
        if (tempItems) {
                items.push(...tempItems);
        }
}

function deleteItem(itemId) {
        console.log(`item ${itemId} is deleted`);
        items = items.filter(item => item.id !== itemId);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(itemId) {
        const itemRef = items.find(item => item.id === itemId);
        // itemRef.complete = el.checked;
        itemRef.complete = !itemRef.complete;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

list.addEventListener('click', function(e) {
        const id = +e.target.value;
        if (e.target.matches('button')) {
                deleteItem(id);
        } else if (e.target.matches('input[type="checkbox"]')) {
                markAsComplete(id);
        }
});

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();
displayItems(); // to render it the first time user opens a page
