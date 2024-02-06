/* Burger */
const BODY_BURGER_OPENED = 'body_burger-opened';

const bodyNode = document.querySelector('body');
const burgerControlNode = document.querySelector('.burger-menu__control');
const burgerSpaceCoverNode = document.querySelector('.cover-space__burger');

burgerControlNode.addEventListener('click', (_event) => {
    if (bodyNode.classList.contains(BODY_BURGER_OPENED)) {
        bodyNode.classList.remove(BODY_BURGER_OPENED);
    } else {
        bodyNode.classList.add(BODY_BURGER_OPENED);
    }
});

burgerSpaceCoverNode.addEventListener('click', (_event) => {
    bodyNode.classList.remove(BODY_BURGER_OPENED);
});


/* Sticky header */

const HEADER_SCROLLED_CLASS = 'header_scrolled';
const headerNode = document.querySelector('.header');
const stickyStartScroll = 20;

toggleBgHeader();
window.addEventListener('scroll', toggleBgHeader); 

function toggleBgHeader () {
    if (
        window.scrollY >= 20 
        && !headerNode.classList.contains(HEADER_SCROLLED_CLASS)
    ) {
        headerNode.classList.add(HEADER_SCROLLED_CLASS);
    } else if (
        window.scrollY < 20 
        && headerNode.classList.contains(HEADER_SCROLLED_CLASS)
    ) {
        headerNode.classList.remove(HEADER_SCROLLED_CLASS);
    }
}

/* Scroll to */

const scrollDownButton = document.getElementById('scroll-action');
const scrollToNode = document.getElementById('scroll-to')

let currentScroll = window.scrollY;
let scrollAnimationId;

scrollDownButton.addEventListener('click', () => {
    stopAnimationScroll();

    currentScroll = window.scrollY;
    startAnimationScroll(scrollToNode.offsetTop - 80);
});

function startAnimationScroll(newScrollY) {
    const deltaScroll = (newScrollY - currentScroll);

    currentScroll += deltaScroll * 0.08;
    window.scrollTo(0, currentScroll);

    if (Math.abs(deltaScroll) > 1) {
        scrollAnimationId = window.requestAnimationFrame(
            () => startAnimationScroll(newScrollY)
        );
    } else {
        window.scrollTo(0, newScrollY);
        stopAnimationScroll();
    }
}

function stopAnimationScroll() {
    window.cancelAnimationFrame(scrollAnimationId);
    scrollAnimationId = undefined;
}