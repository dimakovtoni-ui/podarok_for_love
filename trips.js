const tripButtons = document.querySelectorAll('.trip-button');
const tripBook = document.querySelector('#trip-book');
const closeBookButton = document.querySelector('.close-book');
const bookTitle = document.querySelector('#book-title');
const bookDates = document.querySelector('#book-dates');
const coverTitle = document.querySelector('#cover-title');
const coverDates = document.querySelector('#cover-dates');
const photoSlots = document.querySelectorAll('.photo-slot');

const tripPhotos = {
  'НАЧАЛО': [
    'first_kiss.jpg',
    'first_kiss2.jpg',
    'first_kiss3.jpg',
    'fan1.jpg'
  ]
};

function showTripPhotos(title) {
  const photos = tripPhotos[title] || [];

  photoSlots.forEach((slot, index) => {
    const photo = photos[index];
    slot.replaceChildren();

    if (photo) {
      const image = document.createElement('img');
      image.src = photo;
      image.alt = `${title} — фотография ${index + 1}`;
      image.loading = 'lazy';
      Object.assign(image.style, {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        borderRadius: '14px'
      });
      image.addEventListener('error', () => {
        slot.replaceChildren();
        const heart = document.createElement('span');
        const label = document.createElement('small');
        heart.textContent = '♡';
        label.textContent = `Фото ${index + 1}`;
        slot.append(heart, label);
      }, { once: true });
      slot.append(image);
      return;
    }

    const heart = document.createElement('span');
    const label = document.createElement('small');
    heart.textContent = '♡';
    label.textContent = `Фото ${index + 1}`;
    slot.append(heart, label);
  });
}

tripButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const { title, dates } = button.dataset;

    tripButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    bookTitle.textContent = title;
    bookDates.textContent = dates;
    coverTitle.textContent = title;
    coverDates.textContent = dates;
    showTripPhotos(title);

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
