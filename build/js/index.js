'use strict';

const hamburgerMenuBtn = document.querySelector('#hamburger-btn');
const mobileNavExitBtn = document.querySelector('#exit-btn');
const mobileMenuEl = document.querySelector('#mobile-menu');

const showClassAnimations = [
  'animate-fade-left',
  'animate-once',
  'animate-ease-in-out',
];

hamburgerMenuBtn.addEventListener('click', () => {
  mobileMenuEl.classList.remove('hidden');
  mobileMenuEl.classList.add('flex', ...showClassAnimations);
});

mobileMenuEl.addEventListener('click', (e) => {
  // gaurd  clause
  if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') return;

  mobileMenuEl.classList.remove('flex');
  mobileMenuEl.classList.add('hidden');
});
