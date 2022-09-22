function Gallery(gallery) {
        if (!gallery) {
                throw new Error('No Gallery Found!');
        }

        // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const images = Array.from(gallery.querySelectorAll('img'));
        const modal = document.querySelector('.modal');
        const prevButton = modal.querySelector('.prev');
        const nextButton = modal.querySelector('.next');
        let currentImage;

        function openModal() {
                if (modal.matches('.open')) {
                        return;
                }
                modal.classList.add('open');

                prevButton.addEventListener('click', showPrevImage);
                nextButton.addEventListener('click', showNextImage);
                window.addEventListener('keyup', handleKeyUp);
        }

        function closeModal() {
                modal.classList.remove('open');
                prevButton.removeEventListener('click', showPrevImage);
                nextButton.removeEventListener('click', showNextImage);
                window.removeEventListener('keyup', handleKeyUp);
        }

        function handleClickOutside(e) {
                // if (e.target.querySelector('.modalInner')) {
                if (e.target === e.currentTarget) {
                        closeModal();
                }
        }

        function handleKeyUp(event) {
                if (event.key === 'Escape') return closeModal();
                if (event.key === 'ArrowLeft') return showPrevImage();
                if (event.key === 'ArrowRight') return showNextImage();
        }

        function showImage(el) {
                if (!el) {
                        console.info('no image to show');
                        return;
                }
                modal.querySelector('img').src = el.src;
                modal.querySelector('h2').textContent = el.title;
                modal.querySelector('figure p').textContent = el.dataset.description;
                currentImage = el;
                openModal();
        }

        function showNextImage() {
                showImage(currentImage.nextElementSibling || gallery.firstElementChild);
        }

        function showPrevImage() {
                showImage(currentImage.previousElementSibling || gallery.lastElementChild);
        }

        // these are our even listeners
        images.forEach(image => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                image.style.border = `10px solid #${randomColor}`;
                image.addEventListener('click', e => {
                        showImage(e.currentTarget);
                });
                image.addEventListener('keyup', e => {
                        if (e.key === 'Enter') showImage(e.currentTarget);
                });
        });
        modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
