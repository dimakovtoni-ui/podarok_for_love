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
  ],
  'Решающая поездка': ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  'Первые впечатления': ['5.jpg', '6.jpg', '7.jpg', '8.jpg'],
  'Единственная поездка в Новосибирск': ['9.jpg', '10.jpg', '11.jpg', '12.jpg'],
  'Очень весёлая поездка': ['13.jpg', '14.jpg', '15.jpg', '16.jpg'],
  'Приезд сюрпризом': ['17.jpg', '18.jpg', '19.jpg', '20.jpg'],
  'Самое счастливое Сочи': ['21.jpg', '22.jpg', '23.jpg', '24.jpg'],
  'Чуть-чуть грустная, но счастливая поездка': ['25.jpg', '26.jpg', '27.jpg', '28.jpg'],
  'Болеющая поездка': ['29.jpg', '30.jpg', '31.jpg', '32.jpg'],
  'Самая насыщенная и любимая поездка': ['33.jpg', '34.jpg', '35.jpg', '36.jpg'],
  'Долгожданная поездка': ['37.jpg', '38.jpg', '39.jpg', '40.jpg']
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
