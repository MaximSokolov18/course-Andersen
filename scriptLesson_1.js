const errorMessang = "Некорректный ввод!";

function isNumeric(str) {
  return !isNaN(parseFloat(str));
}

function showNumberSystem() {
  const firstNumber = prompt("Enter the first number", " ");
  const secondNumber = prompt("Enter the second number (from 2 to 36)", " ");

  if (!isNumeric(firstNumber) || !isNumeric(secondNumber)) {
    console.log(errorMessang);
  } else if (secondNumber > 36 || secondNumber < 2) {
    console.log(errorMessang);
  } else {
    console.log(Number(firstNumber).toString(Number(secondNumber)));
  }
}

function showСalc() {
  const firstNumber = prompt("Enter the first number", " ");
  const secondNumber = prompt("Enter the second number", " ");

  if (!isNumeric(firstNumber)) {
    console.log(errorMessang);
  } else if (!isNumeric(secondNumber)) {
    console.log(errorMessang);
  } else {
    console.log(
      `Ответ: ${(Number(firstNumber) + Number(secondNumber)).toFixed(3)}, ${(
        Number(firstNumber) / Number(secondNumber)
      ).toFixed(3)}`
    );
  }
}

showNumberSystem();
showСalc();
