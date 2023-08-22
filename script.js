const knap = document.getElementById("knap");
const state = document.querySelector(".status");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let number = generateRandomNumber(1, 100);
knap.addEventListener("click", () => {
  let guess = document.getElementById("guess").value;
  console.log(number);
  if (guess == number) {
    state.textContent = "JA, det var nemlig " + number;
  }
  if (guess > number) {
    state.textContent = "Dit gæt er for højt :((((";
  }
  if (guess < number) {
    state.textContent = "Dit gæt er for lavt :((((";
  }
});
