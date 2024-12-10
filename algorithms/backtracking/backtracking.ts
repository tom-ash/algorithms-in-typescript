/**
 * Backtracking
 */

export const backtracking = (elements: any[]): any => {
  // const results // Could be used to store the results for an actual problem.

  console.log("explorationPath is used to build a permutation of elements.");
  console.log(
    "exploredIndices is used to keep track of already used elements.\n",
  );

  const backtrack = (explorationPath: any[], exploredIndices: Set<any>) => {
    console.log("explorationPath", explorationPath);

    // Actual problem: check whether the provided explorationPath meets criteria of a given problem and push to results.

    for (let i = 0; i < elements.length; i++) {
      // Continue if an element of index i has already been pushed to the explorationPath.
      if (exploredIndices.has(i)) continue;

      console.log(`Adding index of '${elements[i]}' to the exploredIndices.`);
      exploredIndices.add(i);

      console.log(`Pushing '${elements[i]}' to the explorationPath.`);
      explorationPath.push(elements[i]);

      backtrack(explorationPath, exploredIndices);

      // Backtrack.
      console.log("\nBacktracking...");

      console.log(
        `Deleting index of '${elements[i]}' from the exploredIndices.`,
      );
      exploredIndices.delete(i);

      console.log(
        `Popping '${explorationPath[explorationPath.length - 1]}' from the explorationPath.`,
      );
      explorationPath.pop();
    }
  };

  backtrack([], new Set<any>());

  // Return results.
};
