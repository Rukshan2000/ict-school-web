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

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carouselContainer = document.getElementById('carousel-container');

let scrollAmount = 0;

// Check if the screen is mobile-sized (width <= 768px)
function isMobile() {
  return window.innerWidth <= 768; // You can adjust this width based on your design
}

function updateCardWidth() {
  // Dynamically get the width of a single card + 16px padding/margin
  return carouselContainer.querySelector('.card').offsetWidth + 16;
}

nextBtn.addEventListener('click', () => {
  const cardWidth = updateCardWidth();
  const cardsToScroll = 1; // Scroll 1 card at a time

  const maxScroll = carouselContainer.scrollWidth - carouselContainer.offsetWidth;

  // If scrollAmount exceeds max scroll, reset to the beginning
  if (scrollAmount + cardWidth > maxScroll) {
    scrollAmount = 0;
  } else {
    scrollAmount += cardWidth; // Scroll one card at a time
  }

  carouselContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  const cardWidth = updateCardWidth();
  const cardsToScroll = 1; // Scroll 1 card at a time

  // If scrollAmount is less than 0, reset to the end
  if (scrollAmount - cardWidth < 0) {
    scrollAmount = carouselContainer.scrollWidth - carouselContainer.offsetWidth;
  } else {
    scrollAmount -= cardWidth; // Scroll one card at a time
  }

  carouselContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

// Add an event listener to handle screen resizing dynamically
window.addEventListener('resize', () => {
  scrollAmount = 0; // Reset the scroll amount on resize
  carouselContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
});


//---------------category------------------//

// Function to open modal
function openModal(cardNumber) {
    const modal = document.getElementById(`modal-${cardNumber}`);
    modal.classList.remove('hidden');
  }

  // Function to close modal for each card
  function closeModal(cardNumber) {
    const modal = document.getElementById(`modal-${cardNumber}`);
    modal.classList.add('hidden');
  }
  

