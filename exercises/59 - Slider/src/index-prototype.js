function Slider(slider) {
        if (!(slider instanceof Element)) {
                throw new Error('No slider element is found!');
        }

        this.slider = slider;
        this.slides = slider.querySelector('.slides');
        const prevButton = slider.querySelector('.goToPrev');
        const nextButton = slider.querySelector('.goToNext');

        this.move = this.move.bind(this);

        prevButton.addEventListener('click', this.move);
        nextButton.addEventListener('click', () => this.move('next'));

        this.slides.addEventListener('keyup', e => {
                if (e.key === 'ArrowLeft') this.move();
                if (e.key === 'ArrowRight') this.move('next');
        });

        this.startSlider();
        this.applyClasses();

        console.log(this);
}

Slider.prototype.applyClasses = function() {
        this.current.classList.add('current');
        this.prev.classList.add('prev');
        this.next.classList.add('next');
};

Slider.prototype.removeClasses = function() {
        const classesToRemove = ['prev', 'current', 'next'];
        [this.prev, this.current, this.next].forEach(el => el.classList.remove(...classesToRemove));
};

Slider.prototype.startSlider = function() {
        this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
        this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
        this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};
// function move(direction) {
Slider.prototype.move = function(direction) {
        console.log(this);
        this.removeClasses();
        if (direction === 'next') {
                [this.prev, this.current, this.next] = [
                        this.current,
                        this.next,
                        this.next.nextElementSibling || this.slides.firstElementChild,
                ];
        } else {
                [this.prev, this.current, this.next] = [
                        this.prev.previousElementSibling || this.slides.lastElementChild,
                        this.prev,
                        this.current,
                ];
        }
        this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
