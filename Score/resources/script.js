var awayScore = 0;
var homeScore = 0;
var clickTime = 0;
var minusDelay = 300;

var away = document.getElementById("away");
var home = document.getElementById("home");
var reset = document.getElementById("reset");

away.onpointerdown = function() {
  clickTime = Date.now();
}

away.onpointerup = function() {
  if (Date.now() - clickTime < minusDelay) {
    awayScore++;
  }
  else {
    awayScore--;
  }
  if (awayScore < 0) awayScore = 0;
  away.innerHTML = awayScore;
}

home.onpointerdown = function() {
  clickTime = Date.now();
}

home.onpointerup = function() {
  if (Date.now() - clickTime < minusDelay) {
    homeScore++;
  }
  else {
    homeScore--;
  }
  if (homeScore < 0) homeScore = 0;
  home.innerHTML = homeScore;
}

reset.onclick = function() {
  awayScore = 0;
  homeScore = 0;
  away.innerHTML = awayScore;
  home.innerHTML = homeScore;
}