const output = document.querySelector(".number");
const knap = document.getElementById("knap");

const low = document.getElementById("low");
const high = document.getElementById("high");
const sandt = document.getElementById("sandt");

let tal = document.querySelector(".tal").value;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

knap.addEventListener("click", () => {
  let number = generateRandomNumber(0, 100);
  output.textContent = number;
});

low.addEventListener("click", () => {
  let first = document.querySelector(".number").textContent;
  let output = document.querySelector(".number");
  let number = generateRandomNumber(0, first);
  output.textContent = number;
  console.log(number);
});

high.addEventListener("click", () => {
  let first = document.querySelector(".number").textContent;
  let output = document.querySelector(".number");
  let number = generateRandomNumber(first, 100);
  output.textContent = number;
  console.log(number);
});

sandt.addEventListener("click", () => {
  let output = document.querySelector(".number");

  output.textContent = "YES - I KNEW IT";
});
