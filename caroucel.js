const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Scroll to the previous card
prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: 'smooth'
    });
});

// Scroll to the next card
nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: 'smooth'
    });
});