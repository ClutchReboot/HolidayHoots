function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRndYes() {
  const yesOptions = [
    "Yes!",
    "Wouldn't dream of anything else!",
    "Heck yeah!",
    "Positively!",
    "Totally!"
  ]
  return yesOptions[Math.floor(Math.random() * yesOptions.length)];
}

function choseWrong() {
    document.getElementById('yes-btn').textContent = `${getRndYes()}`;
    document.getElementById('yes-btn').style.width = `${getRndInteger(100, 400)}px`;
    document.getElementById('yes-btn').style.height = `${getRndInteger(50, 250)}px`;

    document.getElementById('no-btn').style.position = "relative";
    document.getElementById('no-btn').style.left = `${getRndInteger(10, 200)}px`;
    document.getElementById('no-btn').style.top = `${getRndInteger(10, 200)}px`;
}

function choseCorrect() {
    document.getElementById('question').textContent = 'Yippy!';
    document.getElementById('yes-btn').textContent = 'Yippy!';
    document.getElementById('no-btn').textContent = 'Yippy!';
    document.getElementById("img").src = '/static/images/hearts.jpg';
}
