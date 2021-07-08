let firstNumber = prompt("Enter the first number", " ");
let secondNumber = prompt("Enter the second number", " ");

function isNumeric(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

if (isNumeric(firstNumber) && isNumeric(secondNumber)) {
  while (+secondNumber < 2 || secondNumber > 36) {
    secondNumber = prompt("Plese, enter the second number (form 2 to 36)", " ");
  }
  console.log((+firstNumber).toString(+secondNumber));
} else {
  console.log("Некорректный ввод!");
}
