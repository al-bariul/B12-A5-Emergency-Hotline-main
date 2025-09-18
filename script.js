/////////////////////////
// Heart Functionality
const heart = document.querySelectorAll(".heart");
const heartIncrease = document.getElementById("heart-increase");
let num = 1;
for (const h of heart) {
  h.addEventListener("click", function () {
    heartIncrease.innerText = num++;
  });
}

/////////////////////////
// call functionality
const money = document.getElementById("money");
const callHistory = document.getElementById("history-added");
let balance = parseInt(money.innerText);

document.getElementById("call-card-1").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-1");
  const callingNum1 = document.getElementById("calling-num-1");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;

  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

document.getElementById("call-card-2").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-2");
  const callingNum1 = document.getElementById("calling-num-2");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;
  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

document.getElementById("call-card-3").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-3");
  const callingNum1 = document.getElementById("calling-num-3");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;
  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

document.getElementById("call-card-4").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-4");
  const callingNum1 = document.getElementById("calling-num-4");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;
  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

document.getElementById("call-card-5").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-5");
  const callingNum1 = document.getElementById("calling-num-5");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;
  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

document.getElementById("call-card-6").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-6");
  const callingNum1 = document.getElementById("calling-num-6");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;
  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

document.getElementById("call-card-7").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-7");
  const callingNum1 = document.getElementById("calling-num-7");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;
  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

document.getElementById("call-card-8").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-8");
  const callingNum1 = document.getElementById("calling-num-8");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;
  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

document.getElementById("call-card-9").addEventListener("click", function () {
  const callingName1 = document.getElementById("calling-name-9");
  const callingNum1 = document.getElementById("calling-num-9");
  const callingName1Text = callingName1.innerText;
  const callingNum1Text = callingNum1.innerText;
  if (balance >= 20 || balance === 20) {
    balance = balance - 20;
    money.innerText = balance;
    alert(`calling ${callingName1Text} ${callingNum1Text}`);

    // history added
    const date = new Date().toLocaleString().split(",")[1];
    let paragraph = document.createElement("p");
    paragraph.innerHTML =
      callingName1Text + "</br>" + callingNum1Text + "</br>" + date;
    callHistory.appendChild(paragraph);

    // clear button
    document.getElementById("clear").addEventListener("click", function () {
      callHistory.innerText = "";
    });
  } else {
    alert("You don't have sufficient amout of money");
  }
});

/////////////////////////////
// copy section
const zero = document.getElementById("zero");
const copy = document.querySelectorAll(".copy");
let zero2 = 1;
for (const c of copy) {
  c.addEventListener("click", function () {
    zero.innerText = zero2++;
  });
}
