function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function choseWrong() {
    document.getElementById('yes-btn').style.width = `${getRndInteger(100, 400)}px`;
    document.getElementById('yes-btn').style.height = `${getRndInteger(50, 250)}px`;
    document.getElementById('no-btn').style.width = `${getRndInteger(30, 50)}px`;
    document.getElementById('no-btn').style.height = `${getRndInteger(30, 50)}px`;
}

function choseCorrect() {
    document.getElementById('question').textContent = 'Yippy!';
    document.getElementById('yes-btn').textContent = 'Yippy!';
    document.getElementById('no-btn').textContent = 'Yippy!';
    document.getElementById("img").src = '/static/images/hearts.jpg';
}
