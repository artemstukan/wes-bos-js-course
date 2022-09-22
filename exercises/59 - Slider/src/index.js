function Slider(slider) {
        if (!(slider instanceof Element)) {
                throw new Error('No slider element is found!');
        }
        let current;
        let prev;
        let next;
        const slides = slider.querySelector('.slides');
        const prevButton = slider.querySelector('.goToPrev');
        const nextButton = slider.querySelector('.goToNext');

        function applyClasses() {
                current.classList.add('current');
                prev.classList.add('prev');
                next.classList.add('next');
        }

        function removeClasses() {
                const classesToRemove = ['prev', 'current', 'next'];
                [prev, current, next].forEach(el => el.classList.remove(...classesToRemove));
        }

        function startSlider() {
                current = slider.querySelector('.current') || slides.firstElementChild;
                prev = current.previousElementSibling || slides.lastElementChild;
                next = current.nextElementSibling || slides.firstElementChild;
        }
        // function move(direction) {
        function move(direction) {
                removeClasses();
                if (direction === 'next') {
                        [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
                } else {
                        [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
                }
                applyClasses();
        }

        prevButton.addEventListener('click', move);
        nextButton.addEventListener('click', () => move('next'));

        slides.addEventListener('keyup', e => {
                if (e.key === 'ArrowLeft') move();
                if (e.key === 'ArrowRight') move('next');
        });

        startSlider();
        applyClasses();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
