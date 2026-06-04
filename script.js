const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;
let timer;

function showSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startSlider() {
  timer = setInterval(() => showSlide(current + 1), 5500);
}

function resetSlider() {
  clearInterval(timer);
  startSlider();
}

if (next && prev) {
  next.addEventListener('click', () => {
    showSlide(current + 1);
    resetSlider();
  });

  prev.addEventListener('click', () => {
    showSlide(current - 1);
    resetSlider();
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    resetSlider();
  });
});

if (slides.length > 1) startSlider();
