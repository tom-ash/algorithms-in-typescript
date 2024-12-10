import { permutations as generatePermutations } from "./permutations";

describe("generatePermutations", () => {
  const letters = ["a", "b", "c"];

  describe("generatePermutations", () => {
    it("returns all letters' permutations", () => {
      const permutations = generatePermutations(letters);

      expect(permutations).toEqual([
        ["a", "b", "c"],
        ["a", "c", "b"],
        ["b", "a", "c"],
        ["b", "c", "a"],
        ["c", "a", "b"],
        ["c", "b", "a"],
      ]);
    });
  });
});
