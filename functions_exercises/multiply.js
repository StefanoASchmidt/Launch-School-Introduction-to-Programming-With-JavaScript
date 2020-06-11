function multiply(num1, num2) {
  return num1*num2;
}

function getNum(which) {
  return Number(require('readline-sync').question(`Enter the ${which} number: `));
}

let firstNum = getNum('first');
let secondNum = getNum('second');
console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);

