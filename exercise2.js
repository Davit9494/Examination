function Calculator() {
  this.calc = function (number1, number2, operator) {
    switch (operator) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        return number1 / number2;
    }
  };
}

let calc1 = new Calculator();
let calc2 = new Calculator();
console.log(calc2.calc(4, 6, "+"));
console.log(calc1.calc(3, 7, "*"));
