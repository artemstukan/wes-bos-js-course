function Gallery(gallery) {
        if (!gallery) {
                throw new Error('No Gallery Found!');
        }

        this.gallery = gallery;

        this.images = Array.from(gallery.querySelectorAll('img'));
        this.modal = document.querySelector('.modal');
        this.prevButton = this.modal.querySelector('.prev');
        this.nextButton = this.modal.querySelector('.next');

        this.showPrevImage = this.showPrevImage.bind(this);
        this.showNextImage = this.showNextImage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        // these are our even listeners
        this.images.forEach(image => {
                image.addEventListener('click', e => {
                        this.showImage(e.currentTarget);
                });
                image.addEventListener('keyup', e => {
                        if (e.key === 'Enter') this.showImage(e.currentTarget);
                });
        });
        this.modal.addEventListener('click', this.handleClickOutside);
        console.log(this);
}

Gallery.prototype.openModal = function() {
        if (this.modal.matches('.open')) {
                return;
        }
        this.modal.classList.add('open');

        this.prevButton.addEventListener('click', this.showPrevImage);
        this.nextButton.addEventListener('click', this.showNextImage);
        window.addEventListener('keyup', this.handleKeyUp);
};

Gallery.prototype.closeModal = function() {
        this.modal.classList.remove('open');
        this.prevButton.removeEventListener('click', this.showPrevImage);
        this.nextButton.removeEventListener('click', this.showNextImage);
        window.removeEventListener('keyup', this.handleKeyUp);
};

Gallery.prototype.handleClickOutside = function(e) {
        // if (e.target.querySelector('.modalInner')) {
        if (e.target === e.currentTarget) {
                this.closeModal();
        }
};

Gallery.prototype.handleKeyUp = function(event) {
        if (event.key === 'Escape') return this.closeModal();
        if (event.key === 'ArrowLeft') return this.showPrevImage();
        if (event.key === 'ArrowRight') return this.showNextImage();
};

Gallery.prototype.showImage = function(el) {
        if (!el) {
                console.info('no image to show');
                return;
        }
        this.modal.querySelector('img').src = el.src;
        this.modal.querySelector('h2').textContent = el.title;
        this.modal.querySelector('figure p').textContent = el.dataset.description;
        this.currentImage = el;
        this.openModal();
};

Gallery.prototype.showNextImage = function() {
        console.log(this);
        this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
};

Gallery.prototype.showPrevImage = function() {
        this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

// console.log(gallery1, gallery2);
