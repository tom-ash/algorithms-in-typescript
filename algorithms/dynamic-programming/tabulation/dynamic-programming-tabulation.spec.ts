import { dynamicProgrammingTabulation } from "./dynamic-programming-tabulation";

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
      dynamicProgrammingTabulation(5);

      expect(consoleSpy.mock.calls).toEqual([
        ["\nCurrent number: 0"],
        ["Setting table - key: 0, value: 0."],

        ["\nCurrent number: 1"],
        ["Setting table - key: 1, value: 1."],

        ["\nCurrent number: 2"],
        ["Fibonacci calculation for current number minus 1: 1."],
        ["Fibonacci calculation for current number minus 2: 0."],
        ["Fibonacci calculation for the current number: 1 + 0 = 1."],
        ["Setting table - key: 2, value: 1."],

        ["\nCurrent number: 3"],
        ["Fibonacci calculation for current number minus 1: 1."],
        ["Fibonacci calculation for current number minus 2: 1."],
        ["Fibonacci calculation for the current number: 1 + 1 = 2."],
        ["Setting table - key: 3, value: 2."],

        ["\nCurrent number: 4"],
        ["Fibonacci calculation for current number minus 1: 2."],
        ["Fibonacci calculation for current number minus 2: 1."],
        ["Fibonacci calculation for the current number: 2 + 1 = 3."],
        ["Setting table - key: 4, value: 3."],

        ["\nCurrent number: 5"],
        ["Fibonacci calculation for current number minus 1: 3."],
        ["Fibonacci calculation for current number minus 2: 2."],
        ["Fibonacci calculation for the current number: 3 + 2 = 5."],
        ["Setting table - key: 5, value: 5."],
      ]);
    });
  });
});
