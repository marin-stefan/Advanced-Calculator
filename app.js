const digit9 = document.querySelector("#digit9");
const digit8 = document.querySelector("#digit8");
const digit7 = document.querySelector("#digit7");
const digit6 = document.querySelector("#digit6");
const digit5 = document.querySelector("#digit5");
const digit4 = document.querySelector("#digit4");
const digit3 = document.querySelector("#digit3");
const digit2 = document.querySelector("#digit2");
const digit1 = document.querySelector("#digit1");
const digit0 = document.querySelector("#digit0");

const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const substract = document.querySelector("#substract");
const add = document.querySelector("#add");
const equals = document.querySelector("#equals");
const result = document.querySelector("#result-big");
const smallResult = document.querySelector("#result-small");
const dot = document.querySelector("#dot");
const clear = document.querySelector("#clear");
const deleteButton = document.querySelector("#del");
const sqrtButton = document.querySelector("#sqrt");
const signButton = document.querySelector("#sign");
const switchButton = document.querySelector("#theme-button");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let sign = "+";
let isFirstNumber = true;

function isInt(number) {
  return Number(number) === number && number % 1 === 0;
}

function isFloat(number) {
  return Number(number) === number && number % 1 !== 0;
}

function showFirstNumber(value) {
  firstNumber = value;
  result.innerHTML = firstNumber;
  smallResult.innerHTML = firstNumber;
}

function showSecondNumber(value) {
  secondNumber = value;
  result.innerHTML = secondNumber;
}

function setOperator(sign) {
  if (firstNumber != 0) {
    isFirstNumber = false;
    operator = sign;
    result.innerHTML = sign;
    smallResult.innerHTML += sign;
  }
}

function buildNumber(digit) {
  if (isFirstNumber) {
    if (isInt(firstNumber)) {
      showFirstNumber(firstNumber * 10 + digit);
    } else {
      showFirstNumber(Number(firstNumber) + digit / 10);
    }
  } else {
    if (isInt(secondNumber)) {
      showSecondNumber(secondNumber * 10 + digit);
    } else {
      showSecondNumber(Number(secondNumber) + digit / 10);
    }
  }
}

digit0.addEventListener("click", function () {
  buildNumber(0);
});
digit1.addEventListener("click", function () {
  buildNumber(1);
});
digit2.addEventListener("click", function () {
  buildNumber(2);
});
digit3.addEventListener("click", function () {
  buildNumber(3);
});
digit4.addEventListener("click", function () {
  buildNumber(4);
});
digit5.addEventListener("click", function () {
  buildNumber(5);
});
digit6.addEventListener("click", function () {
  buildNumber(6);
});
digit7.addEventListener("click", function () {
  buildNumber(7);
});
digit8.addEventListener("click", function () {
  buildNumber(8);
});
digit9.addEventListener("click", function () {
  buildNumber(9);
});

divide.addEventListener("click", function () {
  setOperator("/");
});

multiply.addEventListener("click", function () {
  setOperator("x");
});

substract.addEventListener("click", function () {
  setOperator("-");
});

add.addEventListener("click", function () {
  setOperator("+");
});

clear.addEventListener("click", function () {
  result.innerHTML = 0;
  smallResult.innerHTML = "";
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  sign = "+";
  isFirstNumber = true;
});

deleteButton.addEventListener("click", function () {
  if (isFirstNumber) {
    if (isInt(firstNumber)) {
      showFirstNumber(Math.floor(firstNumber / 10));
    } else {
      showFirstNumber(Math.floor(firstNumber));
    }
  } else {
    if (isInt(secondNumber)) {
      showSecondNumber(Math.floor(secondNumber / 10));
    } else {
      showSecondNumber(Math.floor(secondNumber));
    }
  }
});

equals.addEventListener("click", function () {
  let res = 0;
  switch (operator) {
    case "/":
      res = firstNumber / secondNumber;
      res = (Math.floor(res * 100) / 100).toFixed(1);
      break;
    case "x":
      res = firstNumber * secondNumber;
      break;
    case "-":
      res = firstNumber - secondNumber;
      if (isFloat(res)) {
        res = res.toFixed(1);
      }
      break;
    case "+":
      res = firstNumber + secondNumber;
      break;
  }
  result.innerHTML = res;
  smallResult.innerHTML = res;
  firstNumber = res;
  secondNumber = 0;
  operator = "";
});

dot.addEventListener("click", function () {
  if (isFirstNumber) {
    showFirstNumber(parseFloat(firstNumber).toFixed(1));
  } else {
    showSecondNumber(parseFloat(secondNumber).toFixed(1));
  }
});

sqrtButton.addEventListener("click", function () {
  if (isFirstNumber) {
    if (Number(result.innerHTML) != 0) {
      let sqrtOfFirstNumber = Math.sqrt(firstNumber);
      result.innerHTML = sqrtOfFirstNumber.toFixed(2);
      smallResult.innerHTML = `Square root of ${firstNumber} is ${sqrtOfFirstNumber}`;
    }
  } else {
    let sqrtOfSecondNumber = Math.sqrt(secondNumber);
    result.innerHTML = sqrtOfSecondNumber.toFixed(2);
    smallResult.innerHTML = "";
    smallResult.innerHTML = `Square root of ${secondNumber} is ${sqrtOfSecondNumber}`;
  }
});

signButton.addEventListener("click", function () {
  switch (sign) {
    case "+":
      showFirstNumber(firstNumber * -1);
      sign = "-";
      break;
    case "-":
      showFirstNumber(Math.abs(firstNumber));
      sign = "+";
      break;
  }
});

switchButton.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  const h1 = document.querySelector("h1");
  h1.classList.toggle("light-theme");
});
