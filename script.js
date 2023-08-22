const knap = document.getElementById("knap");
const state = document.querySelector(".status");
let count = 0;
const tries = document.querySelector(".tries");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let number = generateRandomNumber(1, 100);
knap.addEventListener("click", () => {
  let input = document.getElementById("guess").value;
  let guess = parseInt(input);
  console.log(number);
  if (guess === number) {
    state.textContent = "JA, det var nemlig " + number;
  }
  if (guess > number) {
    state.textContent = "Dit gæt er for højt :((((";
  }
  if (guess < number) {
    state.textContent = "Dit gæt er for lavt :((((";
  }
  count++;
  tries.textContent = count;
});
