import { twoPointers } from "./two-pointers"

describe('Two Pointers', () => {
  describe('when argument are valid', () => {
    let consoleSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]], any>

    beforeAll(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    })

    afterAll(() => {
      consoleSpy.mockRestore();
    })

    it('runs the algorithm', () => {
      const numbers = [1,2,3,4,5]

      twoPointers(numbers)

      expect(consoleSpy.mock.calls).toEqual([
        ["Moving left pointer from 0 to 1"],
        ["Moving right pointer from 4 to 3"],
        ["Moving right pointer from 3 to 2"],
        ["Moving right pointer from 2 to 1"],
        ["Left pointer is now 1. Right pointer is now 1. The loop is finished."],
      ]);
    })
  })
})
