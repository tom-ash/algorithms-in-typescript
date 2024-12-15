/**
 * Dynamic Programming with Recursion (Memoization)
 *
 * A working problem: Calculate nth Fibonacci number.
 *
 * The presented algorithm is for the following Fibonacci sequence:
 * Fibonacci sequence  1,   1,   2,   3,   5,   8,   13,  21,  34,  55
 * nth term            1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th
 *
 * Note that sometimes the Fibonacci sequence is denoted in the following manner:
 * Fibonacci sequence  0,   1,   1,   2,   3,   5,   8,   13,  21,  34,
 * nth term            1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th
 *
 * Furthermore, originally Fibonacci denoted the sequence as:
 * Fibonacci sequence  1,   2,   3,   5,   8,   13,  21,  34,  55,  89
 * nth term            1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th
 */

import { ordinalSuffix } from "../../../helpers/ordinal-suffix";

export const dynamicProgrammingWithMemoization = (
  number: number,
  cache: Map<number, number> = new Map(),
): number => {
  console.log(`\nCalled for nth term: ${number}.`);

  if (number === 2 || number === 1) {
    console.log(
      `Base case reached: ${ordinalSuffix(number)} Fibonacci number is 1.`,
    );
    return 1;
  }

  if (cache.has(number)) {
    console.log(
      `Memoized value found for ${ordinalSuffix(number)} Fibonacci number is ${number}.`,
    );
    return cache.get(number)!;
  }

  console.log(`Calling recursively for ${number - 1} and ${number - 2}.`);

  const fibonacciForCurrentNumberMinusOne = dynamicProgrammingWithMemoization(
    number - 1,
    cache,
  );
  console.log(
    `\nCalculated ${ordinalSuffix(number - 1)} Fibonacci number: ${fibonacciForCurrentNumberMinusOne}.`,
  );

  const fibonacciForCurrentNumberMinusTwo = dynamicProgrammingWithMemoization(
    number - 2,
    cache,
  );
  console.log(
    `\nCalculated ${ordinalSuffix(number - 2)} Fibonacci number: ${fibonacciForCurrentNumberMinusTwo}.`,
  );

  const result =
    fibonacciForCurrentNumberMinusOne + fibonacciForCurrentNumberMinusTwo;

  console.log(
    `Memoizing ${ordinalSuffix(number)} Fibonacci number: ${fibonacciForCurrentNumberMinusOne} + ${fibonacciForCurrentNumberMinusTwo} = ${result}.`,
  );
  cache.set(number, result);

  return result;
};
