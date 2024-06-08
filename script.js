"strict mode";
const input = document.querySelector(".input");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;

check.addEventListener("click", function () {
  if (input.value != "") {
    if (input.value == random) {
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".right-num").textContent = random;
      heighScore++;
      document.querySelector(".heigh-score-num").textContent = heighScore;
      document.querySelector(".res-info").textContent = "correct answer";
    } else if (input.value > random) {
      document.querySelector(".res-info").textContent = "too high";
      score--;
      document.querySelector(".score-num").textContent = score;
    } else if (input.value < random) {
      document.querySelector(".res-info").textContent = "too low";
      score--;
      document.querySelector(".score-num").textContent = score;
    }
    if (score == 0) {
      document.querySelector(".res-info").textContent = "you lose ";
      check.disabled = true;
    }
  } else {
    document.querySelector(".res-info").textContent = "write a number";
  }
});
again.addEventListener("click", function () {
  random = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  check.disabled = false;
  document.querySelector("body").style.backgroundColor = "rgb(32, 31, 31)";
  document.querySelector(".res-info").textContent = "start guessing...";
  document.querySelector(".right-num").textContent = "?";
  input.value = "";
});
