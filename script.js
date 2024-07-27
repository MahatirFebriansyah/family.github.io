document.querySelector('.scroll-btn.left').addEventListener('click', function() {
    document.querySelector('.card-wrapper').scrollBy({
        left: -400,
        behavior: 'smooth'
    });
});

document.querySelector('.scroll-btn.right').addEventListener('click', function() {
    document.querySelector('.card-wrapper').scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.ul');

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });
});

// Optional: Add smooth scrolling for mobile users using touch events
document.querySelector('.card-wrapper').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.card-wrapper').addEventListener('touchmove', handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff) > 0) {
        const cardWrapper = document.querySelector('.card-wrapper');
        cardWrapper.scrollLeft += xDiff;
    }

    xDown = null;
}