import { slidingWindow } from "./sliding-window";

describe("Sliding Window", () => {
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
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const windowSize = 3;

      slidingWindow(numbers, windowSize);

      expect(consoleSpy.mock.calls).toEqual([
        ["Window: [[0,1,2]3,4,5,6,7,8,9]."],
        ["Window: [0[1,2,3]4,5,6,7,8,9]."],
        ["Window: [0,1[2,3,4]5,6,7,8,9]."],
        ["Window: [0,1,2[3,4,5]6,7,8,9]."],
        ["Window: [0,1,2,3[4,5,6]7,8,9]."],
        ["Window: [0,1,2,3,4[5,6,7]8,9]."],
        ["Window: [0,1,2,3,4,5[6,7,8]9]."],
        ["Window: [0,1,2,3,4,5,6[7,8,9]]."],
      ]);
    });
  });
});
