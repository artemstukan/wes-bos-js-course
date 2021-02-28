function Slider(sliderEl) {
        if (!(sliderEl instanceof Element)) {
                throw new Error('No slider passed in');
        }
        let currentSlide;
        let prevSlide;
        let nextSlide;

        const prevButton = sliderEl.querySelector('.controls .goToPrev');
        const nextButton = sliderEl.querySelector('.controls .goToNext');

        const slides = sliderEl.querySelector('.slides');

        function startSlider() {
                currentSlide = sliderEl.querySelector('.slide.current') || slides.firstElementChild;
                prevSlide = currentSlide.previousElementSibling || slides.lastElementChild;
                nextSlide = currentSlide.nextElementSibling || slides.firstElementChild;
        }

        function removeCurrentSlidesClasses() {
                currentSlide.classList.remove('current');
                prevSlide.classList.remove('prev');
                nextSlide.classList.remove('next');

                // const classesToRemove = ['prev', 'current', 'next'];
                // currentSlide.classList.remove(...classesToRemove);
                // prevSlide.classList.remove(...classesToRemove);
                // nextSlide.classList.remove(...classesToRemove);
        }

        function applyClasses() {
                currentSlide.classList.add('current');
                prevSlide.classList.add('prev');
                nextSlide.classList.add('next');
        }

        function move(direction) {
                removeCurrentSlidesClasses();

                // currentSlide =
                //         direction === 'forward'
                //                 ? currentSlide.nextElementSibling || slides.firstElementChild
                //                 : currentSlide.previousElementSibling || slides.lastElementChild;
                // prevSlide = currentSlide.previousElementSibling || slides.lastElementChild;
                // nextSlide = currentSlide.nextElementSibling || slides.firstElementChild;

                if (direction === 'back') {
                        [prevSlide, currentSlide, nextSlide] = [
                                prevSlide.previousElementSibling || slides.lastElementChild,
                                prevSlide,
                                currentSlide,
                        ];
                } else {
                        [prevSlide, currentSlide, nextSlide] = [
                                currentSlide,
                                nextSlide,
                                nextSlide.nextElementSibling || slides.firstElementChild,
                        ];
                }

                applyClasses();
        }

        startSlider();
        applyClasses();

        nextButton.addEventListener('click', move);

        prevButton.addEventListener('click', function() {
                move('back');
        });

        document.addEventListener('keyup', function(e) {
                if (!window.getSelection().anchorNode || !window.getSelection().anchorNode.parentElement) {
                        return;
                }
                const selectedEl = window.getSelection().anchorNode.parentElement;
                if (e.key === 'ArrowRight') {
                        if (sliderEl.contains(selectedEl)) {
                                move();
                        }
                        return;
                }
                if (e.key === 'ArrowLeft') {
                        if (sliderEl.contains(selectedEl)) {
                                move('back');
                        }
                }
        });
}

// const slider1 = new Slider(document.querySelector('.slider'));
const slider1 = Slider(document.querySelector('.slider'));
console.log(slider1);
const slider2 = Slider(document.querySelector('.dog-slider'));
