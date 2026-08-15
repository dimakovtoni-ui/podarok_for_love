const openStoryButton = document.querySelector('#openStory');

openStoryButton.addEventListener('click', () => {
  document.body.classList.add('leaving');
  window.setTimeout(() => {
    window.location.href = 'history.html';
  }, 600);
});
