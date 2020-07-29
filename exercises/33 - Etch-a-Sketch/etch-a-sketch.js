const canvas = document.querySelector('canvas[id = etch-a-sketch]');
// const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
console.dir(ctx);
const shakebutton = document.querySelector('button.shake');

const { width, height } = canvas;
console.log(width, height);

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

const MOVE_AMOUNT = 50;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 100;
ctx.strokeStyle = `hsl(100, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
        console.log(key);
        ctx.beginPath();
        ctx.moveTo(x, y);
        switch (key) {
                case 'ArrowUp':
                        y -= MOVE_AMOUNT;
                        break;
                case 'ArrowDown':
                        y += MOVE_AMOUNT;
                        break;
                case 'ArrowLeft':
                        x -= MOVE_AMOUNT;
                        break;
                case 'ArrowRight':
                        x += MOVE_AMOUNT;
                        break;
                default:
                        break;
        }

        hue += 10;
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.lineTo(x - Math.floor((Math.random() * 10) / 3), y - Math.floor((Math.random() * 10) / 3));
        ctx.stroke();
}

function handleKey(e) {
        if (e.key.includes('Arrow')) {
                e.preventDefault();
                draw({ key: e.key });
        }
}

function clearCanvas() {
        canvas.classList.add('shake');
        ctx.clearRect(0, 0, width, height);
        canvas.addEventListener(
                'animationend',
                function() {
                        canvas.classList.remove('shake');
                },
                { once: true }
        );
}

window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
