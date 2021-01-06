// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const options = {
        SIZE: 100,
        SCALE: 1.34,
};

const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector({ fastMode: true });
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');
console.log(optionsInputs);
optionsInputs.forEach(input => { 
        input.addEventListener('change', function(event) {
                console.log(event.currentTarget.value);
                const { value, name } = event.currentTarget;
                // options[input.name] = +input.value;
                options[name] = +value;
        });
});

async function populateVideo() {
        const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 1280, height: 720 },
        });
        video.srcObject = stream;
        await video.play();
        console.log('video has started');
        console.log(video.videoWidth, video.videoHeight);

        // canvas.width = video.videoWidth;
        // canvas.height = video.videoHeight;
        ({ videoWidth: canvas.width, videoHeight: canvas.height } = video);
        faceCanvas.width = video.videoWidth;
        faceCanvas.height = video.videoHeight;
}

function drawFace(face) {
        const { width, height, top, left } = face.boundingBox;
        ctx.strokeStyle = 'green';
        ctx.linewidth = 2;
        ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
        faceCtx.imageSmoothingEnabled = false;
        faceCtx.drawImage(video, face.x, face.y, face.width, face.height, face.x, face.y, options.SIZE, options.SIZE);
        const width = face.width * options.SCALE;
        const height = face.height * options.SCALE;
        faceCtx.drawImage(
                faceCanvas,
                face.x,
                face.y,
                options.SIZE,
                options.SIZE,
                face.x - (width - face.width) / 2,
                face.y - (height - face.height) / 2,
                width,
                height
        );
        // faceCtx.clearRect(face.x, face.y, options.SIZE, options.SIZE);
}

async function detect() {
        const faces = await faceDetector.detect(video);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
        // faces.forEach(face => {
        //         drawFace(face);
        // }); // why exactly these two are the same
        faces.forEach(drawFace);
        faces.forEach(censor);
        requestAnimationFrame(detect);
}

populateVideo().then(detect);