"use strict";

// const knap = document.getElementById("knap");

// const final = document.querySelector(".final");

// knap.addEventListener("click", () => {
//   const belob = document.getElementById("guess").value;

//   final.textContent = momsberegner(belob);
// });

// function momsberegner(number, moms = 25) {
//   return number * (moms / 100 + 1);
// }

// const result = greeting("Klaus");
const txt = ` Halløj ${greeting("Klaus")}`;
// console.log(result);

function greeting(firstName) {
  return `Hello ${firstName}`;
}
