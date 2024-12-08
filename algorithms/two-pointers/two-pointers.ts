/**
 * Two Pointers
 */

export const twoPointers = (numbers: number[]): any => {
  let leftPointer: number = 0;
  let rightPointer: number = numbers.length - 1;

  while (leftPointer < rightPointer) {

    // An actual problem condition would be here.
    if (leftPointer + rightPointer % 2 === 0) {
      console.log(
        `Moving left pointer from ${leftPointer} to ${leftPointer + 1}`,
      );

      leftPointer++;
    } else {
      console.log(
        `Moving right pointer from ${rightPointer} to ${rightPointer - 1}`,
      );

      rightPointer--;
    }
  }

  console.log(
    `Left pointer is now ${leftPointer}. Right pointer is now ${rightPointer}. The loop is finished.`,
  );

  // An actual problem solution could be returned here.
};
