// Importing Calculator class
import Calculator from '../src/calculator';

let num1 = 10;
let num2 = 10;

const Calc = new Calculator(num1, num2);

describe('Testing Calculator Class', () => {
  // Both variables should be type number
  it(`Type of both variables should be Number`, () => {
    expect(typeof num1).toBe('numbe');
    expect(typeof num2).toBe('numbe');
  });

  // Testing sum method
    it(`Addition of ${num1} & ${num2} should result 20`, () => {
    expect(Calc.sum).toBe(20);
  });

  // Testing diff method
  it(`Substraction of ${num1} from ${num2} should result 0`, () => {
    expect(Calc.diff).toBe(0);
  });

  // Testing multiply method
  it(`${num1} & ${num2} multiplied should be 100`, () => {
    expect(Calc.multiply).toBe(100);
  });

  // Testing divided method
  it(`${num1} divided by ${num2} should be 1`, () => {
    expect(Calc.divided).toBe(1);
  });
});
