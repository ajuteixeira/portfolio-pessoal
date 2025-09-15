const toggleBtn = document.getElementById('menu-toggle');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
  links.classList.toggle('show');
});

document.querySelectorAll('.links a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('show');
  });
});

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

document.addEventListener('DOMContentLoaded', function () {
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
