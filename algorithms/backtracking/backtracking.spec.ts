import { backtracking } from "./backtracking";

describe("Backtracking", () => {
  describe("when the argument is valid", () => {
    let consoleSpy: jest.SpyInstance<
      void,
      [message?: any, ...optionalParams: any[]],
      any
    >;
    let elements: any;

    beforeAll(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

      elements = ["a", "b", "c"];
    });

    afterAll(() => {
      consoleSpy.mockRestore();
    });

    it("runs the algorithm", () => {
      backtracking(elements);

      expect(consoleSpy.mock.calls).toEqual([
        ["explorationPath is used to build a permutation of elements."],
        ["exploredIndices is used to keep track of already used elements.\n"],
        ["explorationPath", []],
        ["Adding index of 'a' to the exploredIndices."],
        ["Pushing 'a' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'b' to the exploredIndices."],
        ["Pushing 'b' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'c' to the exploredIndices."],
        ["Pushing 'c' to the explorationPath."],
        ["explorationPath", []],
        ["\nBacktracking..."],
        ["Deleting index of 'c' from the exploredIndices."],
        ["Popping 'c' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'b' from the exploredIndices."],
        ["Popping 'b' from the explorationPath."],
        ["Adding index of 'c' to the exploredIndices."],
        ["Pushing 'c' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'b' to the exploredIndices."],
        ["Pushing 'b' to the explorationPath."],
        ["explorationPath", []],
        ["\nBacktracking..."],
        ["Deleting index of 'b' from the exploredIndices."],
        ["Popping 'b' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'c' from the exploredIndices."],
        ["Popping 'c' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'a' from the exploredIndices."],
        ["Popping 'a' from the explorationPath."],
        ["Adding index of 'b' to the exploredIndices."],
        ["Pushing 'b' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'a' to the exploredIndices."],
        ["Pushing 'a' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'c' to the exploredIndices."],
        ["Pushing 'c' to the explorationPath."],
        ["explorationPath", []],
        ["\nBacktracking..."],
        ["Deleting index of 'c' from the exploredIndices."],
        ["Popping 'c' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'a' from the exploredIndices."],
        ["Popping 'a' from the explorationPath."],
        ["Adding index of 'c' to the exploredIndices."],
        ["Pushing 'c' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'a' to the exploredIndices."],
        ["Pushing 'a' to the explorationPath."],
        ["explorationPath", []],
        ["\nBacktracking..."],
        ["Deleting index of 'a' from the exploredIndices."],
        ["Popping 'a' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'c' from the exploredIndices."],
        ["Popping 'c' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'b' from the exploredIndices."],
        ["Popping 'b' from the explorationPath."],
        ["Adding index of 'c' to the exploredIndices."],
        ["Pushing 'c' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'a' to the exploredIndices."],
        ["Pushing 'a' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'b' to the exploredIndices."],
        ["Pushing 'b' to the explorationPath."],
        ["explorationPath", []],
        ["\nBacktracking..."],
        ["Deleting index of 'b' from the exploredIndices."],
        ["Popping 'b' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'a' from the exploredIndices."],
        ["Popping 'a' from the explorationPath."],
        ["Adding index of 'b' to the exploredIndices."],
        ["Pushing 'b' to the explorationPath."],
        ["explorationPath", []],
        ["Adding index of 'a' to the exploredIndices."],
        ["Pushing 'a' to the explorationPath."],
        ["explorationPath", []],
        ["\nBacktracking..."],
        ["Deleting index of 'a' from the exploredIndices."],
        ["Popping 'a' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'b' from the exploredIndices."],
        ["Popping 'b' from the explorationPath."],
        ["\nBacktracking..."],
        ["Deleting index of 'c' from the exploredIndices."],
        ["Popping 'c' from the explorationPath."],
      ]);
    });
  });
});
