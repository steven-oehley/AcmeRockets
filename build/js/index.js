'use strict';

const hamburgerMenuBtn = document.querySelector('#hamburger-btn');
const mobileNavExitBtn = document.querySelector('#exit-btn');
const mobileMenuEl = document.querySelector('#mobile-menu');

hamburgerMenuBtn.addEventListener('click', () => {
  mobileMenuEl.classList.remove('hidden');
});

mobileMenuEl.addEventListener('click', (e) => {
  // gaurd  clause
  if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') return;

  mobileMenuEl.classList.add('hidden');
});
