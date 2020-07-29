const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('strong.watch');
const button = document.querySelector('button.accept');

function obCallback(payload) {
        if (payload[0].intersectionRatio === 1) {
                // button.removeAttribute('disabled');
                button.disabled = false;
                ob.unobserve(terms.lastElementChild);
        }
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });
ob.observe(terms.lastElementChild);
