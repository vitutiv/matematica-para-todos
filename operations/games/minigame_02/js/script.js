var playing = false;
var score;
var action, action1;
var timeremaining;
var y, x, num;
var simbolo;
var cont;

function startGame() {
    if (playing === true) {
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
      generateNumbers();
      startCountdown();
    }
}

function generateNumbers() {
  for (i = 0; i < 10; i++) {
    document.getElementById("box"+i).innerHTML = i;
  }
}

function attQuestion() {
  if (simbolo == 1) {
    document.getElementById("questionBox").innerHTML = x + " * " + num + " = " + z;
  } else {
    document.getElementById("questionBox").innerHTML = num + " * " + x + " = " + z;
  }
}

function correction(num) {
    console.log("tá pegando isso?")
    if (playing === true) {
      num = document.getElementById("box"+num).innerHTML;
      if (simbolo == 1) {
        document.getElementById("questionBox").innerHTML = x + " + " + num + " = " + z;
      } else {
        document.getElementById("questionBox").innerHTML = num + " + " + x + " = " + z;
      }
          if (document.getElementById("box"+num).innerHTML == y) {
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            setTimeout(function() {
              generateQA();
            }, 1000);
        } else {
            if (simbolo == 1) {
              document.getElementById("questionBox").innerHTML = x + " + " + num + " = " + z;
            } else {
              document.getElementById("questionBox").innerHTML = num + " + " + x + " = " + z;
            }
            setTimeout(function() {
              stopCountdown();
            }, 1000);
        }
    }
}


function startCountdown() {
  action = setInterval(function() {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if (timeremaining === 0) {
      stopCountdown();
      show("gameOverBox");
      document.getElementById("gameOverBox").innerHTML =
        "<p>Fim de jogo!</p><p>Sua pontuação foi " + score + ".</p>";
      hide("timeremainingBox");
      playing = false;
      document.getElementById("startresetBox").innerHTML = "Começar Jogo";
    }
  }, 1000);
}

function generateQA() {
  x = Math.round(9 * Math.random());
  y = Math.round(9 * Math.random());
  z = x + y;
  simbolo = 1 + Math.round(2 * Math.random());
  num = "_";
  if (simbolo == 1) {
    document.getElementById("questionBox").innerHTML = x + " + " + num + " = " + z;
  } else {
    document.getElementById("questionBox").innerHTML = num + " + " + x + " = " + z;
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
  playing = false;
  document.getElementById("startresetBox").innerHTML = "Começar Jogo";
}
