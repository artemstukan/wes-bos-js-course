function destroy() {
        document.body.innerHTML = '<p class = "destroyed"> Destroyed due to inactivity </p>';
}

let bombTimer = setTimeout(destroy, 2000);

window.addEventListener('click', function() {
        console.log('good luck trying to save it');
        clearTimeout(bombTimer);
        bombTimer = setTimeout(destroy, 2000);
});
