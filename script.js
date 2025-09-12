const carousel = document.getElementById('carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    toggle.textContent = savedTheme === 'dark' ? '☼' : '⏾';
  }

  toggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? '☼' : '⏾';
  });
});

next.addEventListener('click', () => {
  carousel.scrollBy({ left: 220, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  carousel.scrollBy({ left: -220, behavior: 'smooth' });
});
