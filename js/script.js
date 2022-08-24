let historyNum = []; //history display
let fullNum = []; //input number
let firstNum = 0; //current number
let opCount = 0; //changes math
let mathSigns = ["+", "x", "/", "-", "."];

function resetPage() {
  window.location.reload();
}
//takes input from buttons on calculator to store in fullNum
function displayNum(num) {
  var container = document.getElementById("displayNum");
  var historyContainer = document.getElementById("history");
  if (doubleDecimal() === false) {
    fullNum.push(num);
    fullNum.join("");
    container.innerText = fullNum.join("");
    historyNum.push(num);
    historyContainer.innerText = historyNum.join("");
  } else if (doubleDecimal() === true && num != ".") {
    fullNum.push(num);
    fullNum.join("");
    container.innerText = fullNum.join("");
    historyNum.push(num);
    historyContainer.innerText = historyNum.join("");
  }
}

//backspade function to clear user input
function numClear() {
  let arr = Array.isArray(fullNum);
  var container = document.getElementById("displayNum");
  var historyContainer = document.getElementById("history");
  if (fullNum.length > 1) {
    fullNum.pop();
    container.innerText = fullNum.join("");
    historyNum.pop();
    historyContainer.innerText = historyNum.join("");
  } else if (fullNum.length === 1 && historyNum.length === 1) {
    fullNum = [];
    container.innerText = "0";
    historyNum.pop();
    historyContainer.innerText = "0";
  } else if (fullNum.length === 1 && historyNum.length > 1) {
    fullNum = [];
    container.innerText = "0";
    historyNum.pop();
    historyContainer.innerText = historyNum.join("");
  }
}

//math calculation function for input
function operator(operator, num1, num2) {
  var container = document.getElementById("displayNum");
  var historyContainer = document.getElementById("history");
  let results = 0;
  if (operator === 1) {
    results = num1 + num2;
    results = round(results, 4);
    historyNum.push(results);
    //historyNum.push('+');
    historyContainer.innerText = historyNum.join("");
    container.innerText = results;
    firstNum = results;
  } else if (operator === 2) {
    results = num1 * num2;
    results = round(results, 4);
    historyNum.push(results);
    //historyNum.push('*');
    historyContainer.innerText = historyNum.join("");
    container.innerText = results;
    firstNum = results;
  } else if (operator === 3) {
    results = num1 / num2;
    results = round(results, 4);
    historyNum.push(results);
    historyContainer.innerText = historyNum.join("");
    container.innerText = results;
    firstNum = results;
  } else if (operator === 4) {
    results = num1 - num2;
    results = round(results, 4);
    historyNum.push(results);
    historyContainer.innerText = historyNum.join("");
    container.innerText = results;
    firstNum = results;
  }
}
//math operator choices
function chooseOp(opNum) {
  var historyContainer = document.getElementById("history");
  let arr = Array.isArray(fullNum);
  //firstNum = Number(fullNum.join(''));
  if (
    duplicateOperator(opNum) === true &&
    isFullNumMulti() === true &&
    isLastInputOperator() === false &&
    fullNum.length != 0
  ) {
    firstNum = Number(fullNum.join(""));
    fullNum = [];
    historyNum.push(mathSigns[opNum - 1]);
    historyContainer.innerText = historyNum.join("");
    opCount = opNum;
  } else if (
    duplicateOperator(opNum) === true &&
    isLastInputOperator() === false &&
    fullNum.length != 0
  ) {
    firstNum = Number(fullNum);
    fullNum = [];
    historyNum.push(mathSigns[opNum - 1]);
    historyContainer.innerText = historyNum.join("");
    opCount = opNum;
  } else if (
    duplicateOperator(opNum) === false &&
    isLastInputOperator() === false &&
    fullNum.length != 0
  ) {
    //historyNum.push(mathSigns[opCount - 1]);
    historyNum.push("=");
    historyContainer.innerText = historyNum.join("");
    operator(opCount, firstNum, Number(fullNum.join("")));
    historyNum.push(mathSigns[opNum - 1]);
    opCount = opNum;
    fullNum = [];
  }
}

function equalButton() {
  let arr = Array.isArray(fullNum);
  var historyContainer = document.getElementById("history");
  //historyContainer.innerText = historyNum.join('');
  if (arr === true && opCount != 0 && fullNum.length != 0) {
    historyNum.push("=");
    operator(opCount, firstNum, Number(fullNum.join("")));
    fullNum = firstNum;
    opCount = 0;
  } else if (arr === false && opCount != 0 && fullNum.length != 0) {
    historyNum.push("=");
    operator(opCount, firstNum, Number(fullNum));
    fullNum = firstNum;
    opCount = 0;
  } else if (arr === false && fullNum.length != 0) {
    operator(opCount, firstNum, Number(fullNum));
    fullNum = firstNum;
    opCount = 0;
  } else {
  }
}

function duplicateOperator(opNum) {
  if (
    (opCount === 0 && opNum === 1) ||
    (opCount === 0 && opNum === 2) ||
    (opCount === 0 && opNum === 3) ||
    (opCount === 0 && opNum === 4)
  ) {
    return true;
  } else {
    return false;
  }
}

function isFullNumMulti() {
  if (Array.isArray(fullNum) === true) {
    return true;
  } else {
    return false;
  }
}

function isLastInputOperator() {
  for (let i = 0; i < mathSigns.length; i++) {
    if (historyNum[historyNum.length - 1] === mathSigns[i]) {
      return true;
    } else {
      return false;
    }
  }
}

function doubleDecimal() {
  if (fullNum.includes(".") === true) {
    return true;
  } else {
    return false;
  }
}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
