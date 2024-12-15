import { dynamicProgrammingWithMemoization } from "./dynamic-programming-memoization";

const args = process.argv.slice(2);
const arr = eval(args[0]);

// TODO: Add checks for arr.

dynamicProgrammingWithMemoization(arr);
