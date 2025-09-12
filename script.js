const carousel = document.getElementById('carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', () => {
  carousel.scrollBy({ left: 220, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  carousel.scrollBy({ left: -220, behavior: 'smooth' });
});
