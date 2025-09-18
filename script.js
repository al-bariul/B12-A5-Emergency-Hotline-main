const heart = document.querySelectorAll(".heart");
const heartIncrease = document.getElementById("heart-increase");
let num = 1;

for (const h of heart) {
  h.addEventListener("click", function () {
    heartIncrease.innerText = num++;
  });
}
