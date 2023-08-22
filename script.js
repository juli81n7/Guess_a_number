const output = document.querySelector(".number");
const knap = document.getElementById("knap");
let min = document.querySelector(".min").value;
let max = document.querySelector(".max").value;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

knap.addEventListener("click", () => {
  let min = document.querySelector(".min").value;
  let max = document.querySelector(".max").value;
  let number = generateRandomNumber(min, max);
  output.textContent = number;
  console.log(min);
  console.log(max);
});
