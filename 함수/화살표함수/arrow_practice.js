/* 계산기 함수 만들기 - 일반 함수 ver*/
/*
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
*/


/* 계산기 함수 만들기 - 화살표 함수 ver*/
const add = (a, b) => a + b;

const substract = (a, b) => a - b;


const multiply = (a, b) => a * b;

// JS에서 몫을 구하는 방법
const divide = (a, b) => parseInt(a / b);

let a = 5;
let b = 2;

console.log(add(a, b));
console.log(substract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));