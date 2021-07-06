let firstNumber = prompt("Enter the first number", " ");
let secondNumber = prompt("Enter the second number", " ");

function isNumeric(str) {
  return (
    +firstNumber === +firstNumber &&
    firstNumber !== "" &&
    firstNumber !== " " &&
    firstNumber !== null
  );
}

if (isNumeric(firstNumber) && isNumeric(secondNumber)) {
  alert((+firstNumber).toString(+secondNumber));
} else {
  alert("Некорректный ввод!");
}
