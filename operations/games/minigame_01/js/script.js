var tiposValidos = ['+', '-', '×', '÷'];
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
var gameType = "+";
setGameType(JSON.parse(localStorage['quizSelection']));
var isRandom = false;
setRandom(true == (localStorage['randomQuiz']));
var title = "Jogo da Adição";
function setRandom(state){
  isRandom = state;
  if (isRandom){
    $("#gameTitle").html("Jogo dos Cálculos");
    document.title = "Jogo dos Cálculos";
  }
}

function setGameType(tipo){
  switch (tipo){
    case '*' || '.':
      tipo = '×';
      break;
    case '/' || ':':
      tipo = '÷';
      break;
  }

  if (this.tiposValidos.includes(tipo)){
    this.gameType = tipo;
  }

  if (this.isRandom) {
    this.title = "Jogo dos Cálculos"
  } else {
    switch (this.gameType){
      case '-':
        this.title = "Jogo da Subtração";
        break;
      case '×':
        this.title = "Jogo da Multiplicação";
        break;
      case '÷':
        this.title = "Jogo da Divisão";
        break;
      default:
        this.title = "Jogo da Adição";
        this.gameType = '+';
        break;
    }
  }
  $("#gameTitle").html(this.title);
  document.title = this.title;
  return this.gameType;
}

function startGame() {
  if (playing) {
    location.reload(true);
  } else {
    playing = true;
    show("timeremainingBox");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    score = 0;
    document.getElementById("scorevalue").innerHTML = this.score;
    hide("gameOverBox");
    document.getElementById("startresetBox").innerHTML = "Resetar Jogo";
    generateQA();
    startCountdown();
  }
}

function correction(num) {
  if (playing) {
    if (document.getElementById("box" + num).innerHTML == correctAnswer) {
      score++;
      document.getElementById("scorevalue").innerHTML = score;
      hide("wrongBox");
      show("correctBox");
      setTimeout(function () {
        hide("correctBox");
      }, 1000);
      generateQA();
    } else {
      hide("correctBox");
      show("wrongBox");
      setTimeout(function () {
        hide("wrongBox");
      }, 1000);
      stopCountdown();
    }
  }
}


function startCountdown() {
  action = setInterval(function () {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if (timeremaining === 0) {
      stopCountdown();
    }
  }, 1000);
}

function generateQA() {
  console.log("isRandom: " + this.isRandom);
  console.log("game type: " + this.gameType);
  var x = 1 + Math.round(9 * Math.random());
  var y = 1 + Math.round(9 * Math.random());
  if (isRandom){
    var rnd = parseInt(Math.random() * this.tiposValidos.length)
    setGameType(this.tiposValidos[rnd]);
  }
  switch (this.gameType) {
    case '-':
      correctAnswer = x - y;
      break;
    case '×':
      correctAnswer = x * y;
      break;
    case '÷':
      correctAnswer = x / y;
      break;
    default:
      this.gameType = '+';
      correctAnswer = x + y;
  }
  document.getElementById("questionBox").innerHTML = x + " " + this.gameType + " " + y;
  var correctPosition = 1 + Math.round(3 * Math.random());
  document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
  var answers = [correctAnswer];
  for (i = 1; i < 5; i++) {
    if (i != correctPosition) {
      var wrongAnswer;
      do {
        switch (this.gameType) {
          case '+':
            wrongAnswer =
              (1 + Math.round(9 * Math.random())) +
              (1 + Math.round(9 * Math.random()));
            break;
          case '-':
            wrongAnswer =
              (1 + Math.round(9 * Math.random())) -
              (1 + Math.round(9 * Math.random()));
            break;
          case '×':
            wrongAnswer =
              (1 + Math.round(9 * Math.random())) *
              (1 + Math.round(9 * Math.random()));
            break;
          case '÷':
            wrongAnswer = 1 + Math.round(9 * Math.random());
            break;
        }
      } while (answers.indexOf(wrongAnswer) > -1);
      document.getElementById("box" + i).innerHTML = wrongAnswer;
      answers.push(wrongAnswer);
    }
  }
}

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

function show(Id) {
  document.getElementById(Id).style.display = "block";
}

function stopCountdown() {
  clearInterval(action);
  show("gameOverBox");
  document.getElementById("gameOverBox").innerHTML =
    "<p>Fim de jogo!</p><p>Sua pontuação foi " + score + ".</p>";
  hide("timeremainingBox");
  hide("correctBox");
  hide("wrongBox");
  playing = false;
  document.getElementById("startresetBox").innerHTML = "Começar Jogo";
}
