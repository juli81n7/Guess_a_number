let output = document.querySelector(".number");
let guess;
let max = 100;
let min = 0;

const startbtn = document.getElementById("knap");
const lowbtn = document.getElementById("low");
const highbtn = document.getElementById("high");
const sandtbtn = document.getElementById("sandt");

let numberOfGuesses = 0;

function comGuess() {
  numberOfGuesses++;
  guess = Math.round((min + max) / 2);
  output.textContent = guess;
}

startbtn.addEventListener("click", () => {
  min = 0;
  max = 100;
  lowbtn.disabled = false;
  highbtn.disabled = false;
  sandtbtn.disabled = false;
  startbtn.textContent = "Start again";
  comGuess();
});

low.addEventListener("click", () => {
  max = guess;
  comGuess();
});

high.addEventListener("click", () => {
  min = guess;
  comGuess();
});

sandtbtn.addEventListener("click", () => {
  output.textContent = "YES - I KNEW IT";
  lowbtn.disabled = true;
  highbtn.disabled = true;
  sandtbtn.disabled = true;
});
