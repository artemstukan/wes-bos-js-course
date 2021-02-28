function Gallery(gallery) {
        if (!gallery) {
                throw new Error('No Gallery Found');
        }
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const imgs = gallery.querySelectorAll('img');
        imgs.forEach(img => {
                img.style.border = `10px solid #${randomColor}`;
        });

        const images = Array.from(gallery.querySelectorAll('img'));
        const modal = document.querySelector('.modal');
        const prevButton = document.querySelector('button.prev');
        const nextButton = document.querySelector('button.next');
        let currentImage;

        function openModal() {
                if (modal.matches('.open')) {
                        return;
                }
                modal.classList.add('open');
                window.addEventListener('keyup', handleClickUp);
                nextButton.addEventListener('click', showNextImage);
                prevButton.addEventListener('click', showPrevImage);
        }

        function closeModal() {
                modal.classList.remove('open');
                window.removeEventListener('keyup', handleClickUp);
                nextButton.removeEventListener('click', showNextImage);
                prevButton.removeEventListener('click', showPrevImage);
        }

        function handleClickOutside(e) {
                // if (e.target.matches('.modal.open')) {
                if (e.target === e.currentTarget) {
                        closeModal();
                }
        }

        function handleClickUp(e) {
                // if (e.which === 27) {
                switch (e.key) {
                        case 'ArrowRight':
                                showNextImage();
                                break;
                        case 'ArrowLeft':
                                showPrevImage();
                                break;
                        case 'Escape':
                                closeModal();
                                break;
                        default:
                }
                // if (e.key === 'Escape') {
                //         closeModal();
                // }
        }

        function showNextImage() {
                showImage(currentImage.nextElementSibling || gallery.firstElementChild);
        }

        function showPrevImage() {
                showImage(currentImage.previousElementSibling || gallery.lastElementChild);
        }

        function showImage(el) {
                if (!el) {
                        console.info('No Image to Show');
                }
                modal.querySelector('img').src = el.src;
                modal.querySelector('h2').textContent = el.title;
                // modal.querySelector('figure p').textContent = el.getAttribute('data-description');
                modal.querySelector('figure p').textContent = el.dataset.description;
                currentImage = el;
                openModal();
        }

        images.forEach(img => img.addEventListener('click', e => showImage(e.currentTarget)));

        modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
