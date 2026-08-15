const openStoryButton = document.querySelector('#openStory');

openStoryButton.addEventListener('click', () => {
  document.body.classList.add('leaving');

  window.setTimeout(() => {
    // Здесь позже начнётся вторая часть нашей истории.
    document.body.classList.remove('leaving');
    openStoryButton.querySelector('span:first-child').textContent = 'Продолжение скоро ❤️';
  }, 800);
});
