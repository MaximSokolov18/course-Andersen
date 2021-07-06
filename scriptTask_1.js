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
  console.log((+firstNumber).toString(+secondNumber));
} else {
  console.log("Некорректный ввод!");
}
