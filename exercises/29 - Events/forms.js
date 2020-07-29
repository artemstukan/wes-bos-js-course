const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
        console.log('hijacked your link');
        console.log(e);
        const shouldChangePage = confirm('This website might be malicious, do you wish to proceed?');
        if (shouldChangePage) {
                window.location = e.currentTarget.href;
        }
        e.preventDefault();
});

const signupForm = document.querySelector('form[name="signup"]');
console.log(signupForm);
signupForm.addEventListener('submit', function(e) {
        const name = e.currentTarget.name.value;
        // console.log(e.currentTarget.email.value);
        // console.log(e.currentTarget.agree.checked);
        if (name.toLowerCase().includes('chad')) {
                e.preventDefault();
                console.log('get away chad!');
                console.log(name);
        }
});

function logEvent(event) {
        console.log(event.type);
}

function realBlur(event) {
        console.log(event.type);
        event.currentTarget.value = event.currentTarget.value
                .split('')
                .fill('#')
                .join('');
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', realBlur);

function handlePhotoClick(event) {
        if (event.type === 'click' || event.key === 'Enter') {
                console.log('thank you for enter clicking');
        }
}

const photo = document.querySelector('img.photo');
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
