/**
 * Backtracking > Permutations
 */

export const permutations = (letters: string[]): any => {
  const results: string[][] = [];

  const backtrack = (explorationPath: any[], exploredIndices: Set<any>) => {
    if (explorationPath.length === letters.length) {
      const permutation = [...explorationPath];

      results.push(permutation);

      return;
    }

    for (let i = 0; i < letters.length; i++) {
      if (exploredIndices.has(i)) continue;

      exploredIndices.add(i);

      explorationPath.push(letters[i]);

      backtrack(explorationPath, exploredIndices);

      exploredIndices.delete(i);

      explorationPath.pop();
    }
  };

  backtrack([], new Set<any>());

  return results;
};

// export const permutations = (numbers: number[]): number[][] => {
//   const results: number[][] = [];

//   console.log("explorationPath is used to build a permutation.");
//   console.log(
//     "exploredIndices is used to keep track of already used numbers.\n",
//   );

//   const backtrack = (
//     explorationPath: number[],
//     exploredIndices: Set<number>,
//   ) => {
//     console.log("explorationPath", explorationPath);

//     // A valid permutation is found when the exploration set's length is equal to the numbers' length.
//     if (explorationPath.length === numbers.length) {
//       const permutation = [...explorationPath];

//       results.push(permutation);

//       return;
//     }

//     for (let i = 0; i < numbers.length; i++) {
//       // Continue when a number of index i has already been pushed to exploration set.
//       if (exploredIndices.has(i)) continue;

//       // Push a number of index i to exploration set.
//       exploredIndices.add(i);
//       explorationPath.push(numbers[i]);

//       backtrack(explorationPath, exploredIndices);

//       // Backtrack.
//       console.log("\nBacktracking...");
//       // Delete i from exploredIndices.
//       console.log(`Deleting index of ${numbers[i]} from exploredIndices.`);
//       exploredIndices.delete(i);
//       // Pop
//       console.log(
//         `Popping ${explorationPath[explorationPath.length - 1]} from the explorationPath.`,
//       );
//       explorationPath.pop();
//     }
//   };

//   backtrack([], new Set<number>());

//   console.log(results);
//   return results;
// };
