const knap = document.getElementById("knap");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let number = generateRandomNumber(1, 100);
knap.addEventListener("click", () => {
  let guess = document.getElementById("guess").value;
  console.log(number);
  if (guess === number) {
    console.log("true");
  }
  if (guess > number) {
    console.log("for højt");
  }
  if (guess < number) {
    console.log("for lavt");
  }
});
