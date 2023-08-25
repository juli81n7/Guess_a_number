"use strict";

const knap = document.getElementById("knap");
const final = document.querySelector(".final");

function momsberegner(number, moms = 25) {
  return number * (moms / 100 + 1);
}

knap.addEventListener("click", () => {
  final.textContent = momsberegner(document.getElementById("guess").value);
});
