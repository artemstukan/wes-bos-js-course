const shoppingForm = document.querySelector('form.shopping');
const list = document.querySelector('.list');

const LOCAL_STORAGE_DB = 'shoppingListArrayLS';
let items = [];

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
        e.target.reset(); // clear the  form

        // fire custom event
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
        const html = items
                .map(
                        // ${item.complete && 'checked'}
                        item => `<li class="shopping-item">
                        <input value="${item.id}" type="checkbox" ${item.complete ? 'checked' : ''}>
                        <span class="itemName">${item.name}</span>
                        <button value="${item.id}" aria-label="Remove ${item.name}">&times;</button>
        </li>`
                )
                .join('');
        list.innerHTML = html;
}

function mirrorToLocalStorage() {
        console.info('Saving  items to LS');
        localStorage.setItem(LOCAL_STORAGE_DB, JSON.stringify(items));
}

function restoreFromLocalStorage() {
        console.info('Restoring items to LS');
        const lsItems = JSON.parse(localStorage.getItem('shoppingListArrayLS'));
        if (lsItems.length) {
                items.push(...lsItems);
                list.dispatchEvent(new CustomEvent('itemsUpdated'));
        }
}

function deleteItem(id) {
        console.log(id);
        // another way to do exactly the same thing
        // const index = items.findIndex(item => item.id === id);
        // items.splice(index, 1);
        items = items.filter(item => item.id !== id);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
        // another way to do exactly the same thing
        // const index = items.findIndex(item => item.id === id);
        // items[index].complete = !items[index].complete;
        const itemRef = items.find(item => item.id === id);
        itemRef.complete = !itemRef.complete;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', function(e) {
        const id = +e.target.value;
        if (e.target.matches('button')) {
                deleteItem(id);
        }
        if (e.target.matches('input')) {
                markAsComplete(id);
        }
});

restoreFromLocalStorage();
