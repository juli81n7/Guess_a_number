const output = document.querySelector(".number");
const knap = document.getElementById("knap");

knap.addEventListener("click", () => {
  const h = document.querySelector(".min").value;
  const b = document.querySelector(".max").value;
  output.textContent = udregn(h, b);
  console.log(convertSquareMToSquareFt(udregn(h, b)));
});

function udregn(højde, bredde) {
  return højde * bredde;
}

function convertSquareMToSquareFt(areal) {
  return areal * 10.7639104;
}
