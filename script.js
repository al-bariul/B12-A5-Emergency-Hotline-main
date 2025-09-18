const heart = document.querySelectorAll(".heart");
const heartIncrease = document.getElementById("heart-increase");
const call = document.querySelectorAll(".call");
const callingName = document.getElementById("calling-name");
const callingNum = document.getElementById("calling-num");
let num = 1;

for (const h of heart) {
  h.addEventListener("click", function () {
    heartIncrease.innerText = num++;
  });
}

const callName = callingName.innerText;
const callNum = callingNum.innerText;
console.log(callName, callNum);
for (const c of call) {
  c.addEventListener("click", function () {
    // alert("Calling" + callName + callNum);
    alert(`calling ${callName} ${callNum}`);
  });
}
