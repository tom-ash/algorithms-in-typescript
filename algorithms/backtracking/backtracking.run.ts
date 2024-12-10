import { backtracking } from "./backtracking";

const args = process.argv.slice(2);
const arr = eval(args[0]);

// TODO: Add checks for arr.

backtracking(arr);
