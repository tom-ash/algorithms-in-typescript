/**
 * Dynamic Programming Template
 *
 * A working problem: Calculate Fibonacci for a given number.
 */

export const dynamicProgrammingTabulation = (number: number): number => {
  const table = new Map();

  for (let currentNumber = 0; currentNumber <= number; currentNumber++) {
    console.log(`\nCurrent number: ${currentNumber}`);

    if (currentNumber <= 1) {
      console.log(
        `Setting table - key: ${currentNumber}, value: ${currentNumber}.`,
      );
      table.set(currentNumber, currentNumber);
    } else {
      const fibonacciCalculationForCurrentNumberMinusOne = table.get(
        currentNumber - 1,
      );
      console.log(
        `Fibonacci calculation for current number minus 1: ${fibonacciCalculationForCurrentNumberMinusOne}.`,
      );

      const fibonacciCalculationForCurrentNumberMinusTwo = table.get(
        currentNumber - 2,
      );
      console.log(
        `Fibonacci calculation for current number minus 2: ${fibonacciCalculationForCurrentNumberMinusTwo}.`,
      );

      const fibonacciCalculation =
        fibonacciCalculationForCurrentNumberMinusOne +
        fibonacciCalculationForCurrentNumberMinusTwo;
      console.log(
        `Fibonacci calculation for the current number: ${fibonacciCalculationForCurrentNumberMinusOne} + ${fibonacciCalculationForCurrentNumberMinusTwo} = ${fibonacciCalculation}.`,
      );

      console.log(
        `Setting table - key: ${currentNumber}, value: ${fibonacciCalculation}.`,
      );
      table.set(currentNumber, fibonacciCalculation);
    }
  }

  return table.get(number);
};
