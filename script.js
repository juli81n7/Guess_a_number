"use strict";

const knap = document.getElementById("knap");
const final = document.querySelector(".final");

knap.addEventListener("click", () => {
  let input = document.getElementById("guess").value;
  let number = parseInt(input);
  momsberegner(number, 25);
});

function momsberegner(number, moms) {
  final.textContent = `${number + number * (moms / 100)}`;
}
