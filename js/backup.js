let historyNum = [];
let fullNum = [];
let firstNum = 0; //current number
let secondNum = 0;
let numCount = 0;
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function displayNum(num){
    var container = document.getElementById("displayNum");
    var historyContainer = document.getElementById("history");
    fullNum.push(num);
    container.innerText = fullNum.join('');
    historyNum.push(num);
    historyContainer.innerText = historyNum.join('');    
}


function operator(operator, num1, num2){
    var container = document.getElementById("displayNum");
    var historyContainer = document.getElementById("history");
    let results = 0;
    switch (operator){
        case 1:
            results = num1 + num2
            historyNum.push(results);
            historyContainer.innerText = historyNum.join('');
            container.innerText = results;
            //fullNum.push(results);

        case 2:
            return(num1 - num2);
        case 3:
            return(num1 * num2);
        case 4:
            return(num1 / num2);
    }
}

function chooseOp(){
    var historyContainer = document.getElementById("history");
    firstNum = Number(fullNum);
    fullNum = [];
    historyNum.push('+');
    historyContainer.innerText = historyNum.join('');
    return 1;
}

function numberTwo(){
    //secondNum = Number(fullNum);
    //fullNum = [];
    return Number(fullNum);
    //return secondNum;
}

function equalButton(){
    secondNum = Number(fullNum);
    operator(chooseOp(), firstNum, secondNum);   
}