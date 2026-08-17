const letterButton = document.querySelector('.letter-button');
const letterBook = document.querySelector('#letter-book');

letterButton.addEventListener('click', () => {
  const isOpen = letterBook.classList.toggle('is-open');

  letterButton.setAttribute('aria-expanded', String(isOpen));
  letterBook.setAttribute('aria-hidden', String(!isOpen));
  letterButton.textContent = isOpen ? 'Закрыть письмо' : 'Небольшое письмо для тебя';

  if (isOpen) {
    window.setTimeout(() => {
      letterBook.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 250);
  }
});
