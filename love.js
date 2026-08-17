const button = document.querySelector('.qualities-button');
const qualities = document.querySelector('#qualities');

button?.addEventListener('click', () => {
  const isOpen = qualities.classList.toggle('is-open');
  button.setAttribute('aria-expanded', String(isOpen));
  qualities.setAttribute('aria-hidden', String(!isOpen));
});
