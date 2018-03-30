class Calculator {
  // Class constructor
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  // Addition
  get sum() {
    return this.num1 + this.num2;
  }
  // Substraction
  get diff() {
    return this.num1 - this.num2;
  }
  // Multiplication
  get multiply() {
    return this.num1 * this.num2;
  }
  // Division
  get divided() {
    return this.num1 / this.num2;
  }
}

export default Calculator;
