// script.js
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }
  const slideWidth = slides[currentSlideIndex].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;

  indicators.forEach((indicator, idx) => {
    if (idx === currentSlideIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function currentSlide(index) {
  showSlide(index);
}

// Initialize slider
showSlide(currentSlideIndex);

// Optional: Auto slide
setInterval(() => {
  showSlide(currentSlideIndex + 1);
}, 8000); // Change image every 8 seconds




