const startBtn = document.getElementById('start-btn');
const coverPage = document.getElementById('cover');
const messagePage = document.getElementById('message');
const music = document.getElementById('bg-music');

startBtn.addEventListener('click', () => {
  coverPage.classList.remove('active');
  messagePage.classList.add('active');
  music.play();
});