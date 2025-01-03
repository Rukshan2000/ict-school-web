// ------------------ Mobile Menu Toggle ------------------

const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const navMenu = document.getElementById('navbar-sticky');

// Toggle the mobile menu visibility
toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
    toggleButton.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('hidden');
});

// ------------------ Carousel Scroll ------------------
// Carousel navigation
const carouselContainer = document.getElementById('carousel-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Function to update the active dot
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Scroll to the previous card
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateDots();
    carouselContainer.scrollBy({
        left: -carouselContainer.offsetWidth,
        behavior: 'smooth'
    });
});

// Scroll to the next card
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateDots();
    carouselContainer.scrollBy({
        left: carouselContainer.offsetWidth,
        behavior: 'smooth'
    });
});

// Function to auto-scroll the carousel every 5 seconds
function autoScroll() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        updateDots();
        carouselContainer.scrollBy({
            left: carouselContainer.offsetWidth,
            behavior: 'smooth'
        });
    }, 5000); // 5 seconds interval
}

// Initialize dots
updateDots();

// Start auto-scrolling
autoScroll();

