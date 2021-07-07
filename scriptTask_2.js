let firstNumber = prompt("Enter the first number", " ");
let secondNumber = prompt("Enter the second number", " ");

function isNumeric(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

if (!isNumeric(firstNumber)) {
  console.log("Некорректный ввод!");
} else if (!isNumeric(secondNumber)) {
  console.log("Некорректный ввод!");
} else {
  console.log(
    `Ответ: ${(+firstNumber + +secondNumber).toFixed(3)}, ${(
      +firstNumber / +secondNumber
    ).toFixed(3)}`
  );
}
