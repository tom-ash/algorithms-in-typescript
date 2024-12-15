import { dynamicProgrammingWithMemoization } from "./dynamic-programming-memoization";

// const fibonacciWithoutDynamicProgramming = (n: number): number => {
//   if (n <= 1) return n;
//   return fibonacciWithoutDynamicProgramming(n - 1) + fibonacciWithoutDynamicProgramming(n - 2);
// };

describe("Dynamic Programming > Tabulation", () => {
  describe("when the argument is valid", () => {
    let consoleSpy: jest.SpyInstance<
      void,
      [message?: any, ...optionalParams: any[]],
      any
    >;

    beforeAll(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterAll(() => {
      consoleSpy.mockRestore();
    });

    it("runs the algorithm", () => {
      dynamicProgrammingWithMemoization(5);

      expect(consoleSpy.mock.calls).toEqual([
        ["\nCalled for nth term: 5."],
        ["Calling recursively for 4 and 3."],
        ["\nCalled for nth term: 4."],
        ["Calling recursively for 3 and 2."],
        ["\nCalled for nth term: 3."],
        ["Calling recursively for 2 and 1."],
        ["\nCalled for nth term: 2."],
        ["Base case reached: 2nd Fibonacci number is 1."],
        ["\nCalculated 2nd Fibonacci number: 1."],
        ["\nCalled for nth term: 1."],
        ["Base case reached: 1st Fibonacci number is 1."],
        ["\nCalculated 1st Fibonacci number: 1."],
        ["Memoizing 3rd Fibonacci number: 1 + 1 = 2."],
        ["\nCalculated 3rd Fibonacci number: 2."],
        ["\nCalled for nth term: 2."],
        ["Base case reached: 2nd Fibonacci number is 1."],
        ["\nCalculated 2nd Fibonacci number: 1."],
        ["Memoizing 4th Fibonacci number: 2 + 1 = 3."],
        ["\nCalculated 4th Fibonacci number: 3."],
        ["\nCalled for nth term: 3."],
        ["Memoized value found for 3rd Fibonacci number is 3."],
        ["\nCalculated 3rd Fibonacci number: 2."],
        ["Memoizing 5th Fibonacci number: 3 + 2 = 5."],
      ]);
    });
  });
});
