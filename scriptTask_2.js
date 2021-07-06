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

if (!isNumeric(firstNumber)) {
  console.log("Некорректный ввод!");
} else if (!isNumeric(secondNumber)) {
  console.log("Некорректный ввод!");
} else {
  alert(
    `Ответ: ${(+firstNumber + +secondNumber).toFixed(3)}, ${(
      +firstNumber / +secondNumber
    ).toFixed(3)}`
  );
}
