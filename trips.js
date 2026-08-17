const tripButtons = document.querySelectorAll('.trip-button');
const tripBook = document.querySelector('#trip-book');
const closeBookButton = document.querySelector('.close-book');
const bookTitle = document.querySelector('#book-title');
const bookDates = document.querySelector('#book-dates');
const coverTitle = document.querySelector('#cover-title');
const coverDates = document.querySelector('#cover-dates');

tripButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const { title, dates } = button.dataset;

    tripButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    bookTitle.textContent = title;
    bookDates.textContent = dates;
    coverTitle.textContent = title;
    coverDates.textContent = dates;

    tripBook.classList.remove('is-open');
    tripBook.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      tripBook.classList.add('is-open');
      window.setTimeout(() => tripBook.scrollIntoView({ behavior: 'smooth', block: 'start' }), 220);
    });
  });
});

closeBookButton.addEventListener('click', () => {
  tripBook.classList.remove('is-open');
  tripBook.setAttribute('aria-hidden', 'true');
  tripButtons.forEach((item) => item.setAttribute('aria-pressed', 'false'));
});
