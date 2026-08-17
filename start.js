const letterButton = document.querySelector('.letter-button');
const letterBook = document.querySelector('#letter-book');
const firstKnowers = document.querySelector('#first-knowers');

letterButton.addEventListener('click', () => {
  const isOpen = letterBook.classList.toggle('is-open');

  letterButton.setAttribute('aria-expanded', String(isOpen));
  letterBook.setAttribute('aria-hidden', String(!isOpen));
  firstKnowers.classList.toggle('is-visible', isOpen);
  firstKnowers.setAttribute('aria-hidden', String(!isOpen));
  letterButton.textContent = isOpen ? 'Закрыть письмо' : 'Небольшое письмо для тебя';

  if (isOpen) {
    window.setTimeout(() => {
      letterBook.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 250);
  }
});
