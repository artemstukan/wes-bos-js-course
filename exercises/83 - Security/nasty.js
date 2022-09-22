import { sanitize } from 'dompurify';

const input = document.querySelector('[name="input"]');
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('nav button');
input.addEventListener('input', () => {
        const clean = sanitize(input.value, { FORBID_ATTR: ['width', 'style', 'display'], FORBID_TAGS: ['style'] });
        output.innerHTML = clean.replace(/\n/g, '<br>');
        // output.innerHTML = input.value.replace(/\n/g, '<br>');
});

// trigger an input even on page load
input.dispatchEvent(new Event('input'));

buttons.forEach(button =>
        button.addEventListener('click', e => {
                alert(e.currentTarget.textContent);
        })
);
