"use strict";

const knap = document.getElementById("knap");
const final = document.querySelector(".final");

knap.addEventListener("click", () => {
  let input = document.getElementById("guess").value;
  let beloeb = parseInt(input);
  momsberegner(beloeb);
});

function momsberegner(number, moms = "0.25") {
  final.textContent = `${number + number * moms}`;
}
