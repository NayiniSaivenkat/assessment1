document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide1");
    const slideNumber = document.getElementById("slideNumber");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
        slideNumber.textContent = index + 1; // Update slide number
    }

    document.getElementById("nextBtn").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.getElementById("prevBtn").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});

let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slides img');
  const slideNumber = document.querySelector(".slider2 .slide-number"); // Target only the second slider
  slideIndex = (n + slides.length) % slides.length; // Update slideIndex based on n
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; // Hide all slides
  }
  slides[slideIndex].style.display = 'block'; // Show the selected slide
  slideNumber.textContent = slideIndex + 1; // Update slide number (slideIndex starts from 0)
}

function moveSlide(n) {
  showSlide(slideIndex + n); // Pass the updated slideIndex to showSlide
}

// Display the first slide
showSlide(0);

const images = ["./img40.jpg", "./img41.jpg"]; // Add more image URLs as needed
let current = 0;

const imageNumber = document.querySelector('.image-number');

document.querySelector('.carsouelprev').addEventListener('click', () => {
  current = (current === 0) ? images.length - 1 : current - 1;
  updateBackground();
});

document.querySelector('.carouselnext').addEventListener('click', () => {
  current = (current === images.length - 1) ? 0 : current + 1;
  updateBackground();
});

function updateBackground() {
  const carouselImage = document.querySelector('.carousel-image');
  carouselImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${images[current]}")`;
  imageNumber.textContent = `${current + 1} / ${images.length}`;
}

updateBackground();



