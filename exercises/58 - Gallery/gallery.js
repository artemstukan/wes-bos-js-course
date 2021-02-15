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
                console.info('Opening Modal');
                if (modal.matches('.open')) {
                        return;
                }
                modal.classList.add('open');
        }

        function closeModal() {
                modal.classList.remove('open');
        }

        function handleClickOutside(e) {
                // if (e.target.matches('.modal.open')) {
                if (e.target === e.currentTarget) {
                        closeModal();
                }
        }

        function showImage(el) {
                if (!el) {
                        console.info('No Image to Show');
                }
                console.log(el);
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

const galary1 = Gallery(document.querySelector('.gallery1'));
const galary2 = Gallery(document.querySelector('.gallery2'));
