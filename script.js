function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleCard(contentId, buttonEl) {
    const content = document.getElementById(contentId);
    content.classList.toggle('hidden');

    // Change button text based on visibility
    if (content.classList.contains('hidden')) {
      buttonEl.textContent = 'Learn More';
    } else {
      buttonEl.textContent = 'Learn Less';
    }
}

const slider = document.getElementById("slider");
const slides = slider.children.length;
let currentIndex = 0;

function showSlide(i) {
  currentIndex = (i + slides) % slides; // wrap around
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById("prev").addEventListener("click", () => {
  if (window.innerWidth < 768) {
    showSlide(currentIndex - 1);
  }
});
document.getElementById("next").addEventListener("click", () => {
  if (window.innerWidth < 768) {
    showSlide(currentIndex + 1);
  }
});

// Swipe support for mobile
let startX = 0;
slider.addEventListener("touchstart", e => startX = e.touches[0].clientX);
slider.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (window.innerWidth < 768) {
    if (startX - endX > 50) showSlide(currentIndex + 1); // swipe left
    if (endX - startX > 50) showSlide(currentIndex - 1); // swipe right
  }
});

// Reset transform if resized to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    slider.style.transform = 'translateX(0%)';
    currentIndex = 0;
  }
});


