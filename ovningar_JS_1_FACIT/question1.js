// 1.1 Skriv funktionerna som anropas i myCalculator så att
// myCalculator kan fungera.

// 1.2 Gör om myCalculator så att den använder if och else

function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return myAddFunction(num1, num2);

    case "-":
      return mySubtractFunction(num1, num2);

    case "*":
      return myMultiplyFunction(num1, num2);

    case "/":
      return myDivisionFunction(num1, num2);

    default:
      return "Error operator not found!";
  }
}

// shift -alt- A för alla /* */
// ctrl * för //

//FACIT

/* function myAddFunction(n1, n2) {
  return n1 + n2;
}
function mySubtractFunction(n1, n2) {
  return n1 - n2;
}
function myMultiplyFunction(n1, n2) {
  return n1 * n2;
}
function myDivisionFunction(n1, n2) {
  return n1 / n2;
}

function myCalculator(operator, num1, num2) {
  if (operator === "+") {
    return myAddFunction(num1, num2);
  } else if (operator === "-") {
    return mySubtractFunction(num1, num2);
  } else if (operator === "*") {
    return myMultiplyFunction(num1, num2);
  } else if (operator === "/") {
    return myDivisionFunction(num1, num2);
  } else {
    return "Error operator not found!";
  }
}

myCalculator("+", 2, 3);
const res1 = myCalculator("+", 2, 4)
const res2 = myCalculator("-", 2, 4)
const res3 = myCalculator("*", 2, 4)
const res4 = myCalculator("/", 2, 4)
const res5 = myCalculator("?", 2, 4)

console.log(res1, res2, res3, res4, res5) */
