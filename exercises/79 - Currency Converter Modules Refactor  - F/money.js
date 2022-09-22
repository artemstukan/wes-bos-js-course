import { init } from './init.js';

const app = document.querySelector('.app');
// app.addEventListener('mouseenter', init, { once: true });
document.querySelector('input[name="from_amount"]').addEventListener('input', init, { once: true });
