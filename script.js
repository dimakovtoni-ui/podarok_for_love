const openStoryButton = document.querySelector('#openStory');
const newMessageNotification = document.querySelector('#newMessageNotification');
const openMessageButton = document.querySelector('#openMessage');
const messageModal = document.querySelector('#messageModal');
const closeMessageButton = document.querySelector('#closeMessage');
const messageBackdrop = document.querySelector('.message-backdrop');

openStoryButton?.addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.add('leaving');
  window.setTimeout(() => {
    window.location.href = 'history.html';
  }, 600);
});

function openMessage() {
  newMessageNotification.hidden = true;
  messageModal.hidden = false;
  document.body.classList.add('message-open');
  closeMessageButton.focus();
}

function closeMessage() {
  messageModal.hidden = true;
  newMessageNotification.hidden = false;
  document.body.classList.remove('message-open');
  openMessageButton.focus();
}

window.setTimeout(() => {
  newMessageNotification.hidden = false;
}, 1200);

openMessageButton.addEventListener('click', openMessage);
closeMessageButton.addEventListener('click', closeMessage);
messageBackdrop.addEventListener('click', closeMessage);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !messageModal.hidden) closeMessage();
});
