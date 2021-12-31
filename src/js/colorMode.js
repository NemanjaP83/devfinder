const themeBtn = document.body.querySelector('.header__icon');
const text = document.body.querySelector('[data-text = "switch"]');
const sunIcon = document.body.querySelector('.header__icon-sun');
const moonIcon = document.body.querySelector('.header__icon-moon');

themeBtn.addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-theme') == 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    text.innerText = 'LIGHT';
    sunIcon.setAttribute('style', 'display: inline-flex');
    moonIcon.setAttribute('style', 'display: none');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    text.innerText = 'DARK';
    sunIcon.setAttribute('style', 'display: none');
    moonIcon.setAttribute('style', 'display: inline-flex');
  }
});

(() => {
  document.documentElement.setAttribute(
    'data-theme',
    localStorage.getItem('theme')
  );
  if (localStorage.getItem('theme') === 'light') {
    text.innerText = 'DARK';
  } else {
    text.innerText = 'LIGHT';
  }
})();
